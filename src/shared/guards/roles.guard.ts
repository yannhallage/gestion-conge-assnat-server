import { Injectable, CanActivate, ExecutionContext, ForbiddenException, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolePersonnel } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<RolePersonnel[]>('roles', context.getHandler());
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      this.logger.warn('Utilisateur non authentifié');
      throw new ForbiddenException('Utilisateur non authentifié');
    }

    const hasRole = requiredRoles.includes(user.role_personnel);
    if (!hasRole) {
      this.logger.warn(`Accès refusé pour le rôle: ${user.role_personnel}`);
      throw new ForbiddenException(`Accès refusé. Rôles autorisés: ${requiredRoles.join(', ')}`);
    }

    this.logger.log(`Accès autorisé pour ${user.email_travail} avec le rôle ${user.role_personnel}`);
    return true;
  }
}
