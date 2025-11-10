import { Injectable, Logger, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { RolePersonnel, TypePersonnel } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class RegisterService {
  private readonly logger = new Logger(RegisterService.name);

  constructor(private prisma: PrismaService) { }

  async register(registerDto: RegisterDto) {
    this.logger.log(`Tentative d'inscription pour: ${registerDto.email}`);

    // Vérifier si l'email existe déjà
    const existingUser = await this.prisma.personnel.findUnique({
      where: { email_travail: registerDto.email },
    });

    if (existingUser) {
      this.logger.warn(`Tentative d'inscription avec un email existant: ${registerDto.email}`);
      throw new ConflictException('Cet email est déjà utilisé');
    }

    // Vérifier si le service existe
    const service = await this.prisma.service.findUnique({
      where: { id_service: registerDto.id_service },
    });

    if (!service) {
      this.logger.warn(`Service non trouvé: ${registerDto.id_service}`);
      throw new BadRequestException('Service non trouvé');
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Créer l'utilisateur
    const user = await this.prisma.personnel.create({
      data: {
        nom_personnel: registerDto.nom,
        prenom_personnel: registerDto.prenom,
        email_travail: registerDto.email,
        password: hashedPassword,
        id_service: registerDto.id_service,
        role_personnel: (registerDto.role as RolePersonnel) || RolePersonnel.EMPLOYE,
        type_personnel: (registerDto.type as TypePersonnel) || TypePersonnel.PERMANENT,
        matricule_personnel: registerDto.matricule,
        telephone_travail: registerDto.telephone_travail,
        is_active: true,
      },
      include: {
        service: {
          include: {
            direction: true,
          },
        },
      },
    });

    this.logger.log(`Utilisateur créé avec succès: ${user.email_travail}`);

    return {
      message: 'Inscription réussie',
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
}
