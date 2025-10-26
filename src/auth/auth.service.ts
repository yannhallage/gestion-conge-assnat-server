import { Injectable, UnauthorizedException, Logger, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../shared/prisma/prisma.service';
import { LoginDto, ChangePasswordDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    this.logger.log(`Tentative de connexion pour l'email: ${email}`);
    
    const user = await this.prisma.personnel.findUnique({
      where: { email_travail: email },
      include: { 
        service: { 
          include: { 
            direction: true 
          } 
        } 
      },
    });

    if (!user) {
      this.logger.warn(`Utilisateur non trouvé: ${email}`);
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    if (!user.is_active) {
      this.logger.warn(`Tentative de connexion avec un compte inactif: ${email}`);
      throw new UnauthorizedException('Compte inactif');
    }

    if (!user.password) {
      this.logger.warn(`Utilisateur sans mot de passe: ${email}`);
      throw new UnauthorizedException('Compte non configuré');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      this.logger.warn(`Mot de passe incorrect pour: ${email}`);
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    this.logger.log(`Connexion réussie pour: ${email}`);
    return user;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    
    const payload = { 
      email: user.email_travail, 
      sub: user.id_personnel,
      role: user.role_personnel 
    };

    const accessToken = this.jwtService.sign(payload);

    this.logger.log(`Token JWT généré pour: ${user.email_travail}`);

    return {
      access_token: accessToken,
      user: {
        id: user.id_personnel,
        nom: user.nom_personnel,
        prenom: user.prenom_personnel,
        email: user.email_travail,
        role: user.role_personnel,
        service: user.service?.nom_service,
        direction: user.service?.direction?.nom_direction,
      },
    };
  }

  async changePassword(userId: string, changePasswordDto: ChangePasswordDto) {
    this.logger.log(`Demande de changement de mot de passe pour l'utilisateur: ${userId}`);

    const user = await this.prisma.personnel.findUnique({
      where: { id_personnel: userId },
    });

    if (!user || !user.password) {
      throw new UnauthorizedException('Utilisateur non trouvé');
    }

    const isCurrentPasswordValid = await bcrypt.compare(
      changePasswordDto.currentPassword,
      user.password,
    );

    if (!isCurrentPasswordValid) {
      this.logger.warn(`Tentative de changement de mot de passe avec un mot de passe actuel incorrect pour: ${user.email_travail}`);
      throw new BadRequestException('Mot de passe actuel incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);

    await this.prisma.personnel.update({
      where: { id_personnel: userId },
      data: { password: hashedNewPassword },
    });

    this.logger.log(`Mot de passe changé avec succès pour: ${user.email_travail}`);

    return { message: 'Mot de passe changé avec succès' };
  }

  async generateTemporaryPassword(): Promise<string> {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
}
