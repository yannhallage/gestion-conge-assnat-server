import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        // Si aucune restriction de rôle, autoriser l'accès
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();

        // Si pas d'utilisateur dans la requête (ex: token manquant)
        if (!user) {
            throw new UnauthorizedException('Utilisateur non authentifié');
        }

        // Si l'utilisateur n'a pas le rôle requis
        if (!requiredRoles.includes(user.role)) {
            throw new ForbiddenException(`Accès refusé pour le rôle ${user.role}`);
        }

        return true;
    }
}
