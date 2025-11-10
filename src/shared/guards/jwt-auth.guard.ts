import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      this.logger.warn('Tentative d\'accès sans token JWT');
      throw new UnauthorizedException('Token d\'authentification requis');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      const user = await this.prisma.personnel.findUnique({
        where: { id_personnel: payload.sub },
        include: { service: { include: { direction: true } } },
      });

      if (!user || !user.is_active) {
        this.logger.warn(`Utilisateur inactif ou inexistant: ${payload.sub}`);
        throw new UnauthorizedException('Utilisateur non autorisé');
      }

      request.user = user;
      return true;
    } catch (error) {
      this.logger.error('Erreur de vérification du token JWT:', error.message);
      throw new UnauthorizedException('Token invalide');
    }
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
