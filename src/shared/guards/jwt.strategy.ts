import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, // Empêche l’utilisation d’un token expiré
            secretOrKey: process.env.JWT_SECRET, // Ne pas mettre de valeur par défaut
        });

        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET manquant dans le fichier .env');
        }
    }

    async validate(payload: any) {
        // Vérifie que le user existe et est encore actif
        const user = await this.prisma.personnel.findUnique({
            where: { id_personnel: payload.sub },
        });

        if (!user || !user.is_active) {
            throw new UnauthorizedException('Utilisateur inactif ou inexistant');
        }

        return {
            id: user.id_personnel,
            email: user.email_personnel,
            role: user.role_personnel,
            nom: user.nom_personnel,
            prenom: user.prenom_personnel,
        };
    }
}
