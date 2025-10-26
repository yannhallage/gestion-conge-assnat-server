import { Controller, Post, Body, UseGuards, Get, Logger } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, ChangePasswordDto } from './dto/auth.dto';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';
import { CurrentUser } from '../shared/decorators/current-user.decorator';
import type { Personnel, RolePersonnel, StatutDemande } from '@prisma/client';
import { RegisterDto } from './dto/register.dto';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiOperation({ summary: 'Connexion utilisateur' })
  @ApiResponse({ status: 200, description: 'Connexion réussie' })
  @ApiResponse({ status: 401, description: 'Email ou mot de passe incorrect' })
  async login(@Body() loginDto: LoginDto) {
    this.logger.log(`Tentative de connexion pour: ${loginDto.email}`);
    return this.authService.login(loginDto);
  }

  @Post('register')
  @ApiOperation({ summary: 'Inscription d\'un nouvel utilisateur' })
  @ApiResponse({
    status: 201,
    description: 'Inscription réussie',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            nom: { type: 'string' },
            prenom: { type: 'string' },
            email: { type: 'string' },
            role: { type: 'string' },
            service: { type: 'string' },
            direction: { type: 'string' },
          },
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 409, description: 'Email déjà utilisé' })
  async register(@Body() registerDto: RegisterDto) {
    this.logger.log(`Tentative d'inscription pour: ${registerDto.email}`);
    return this.authService.register(registerDto);
  }

  @Post('change-password')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async changePassword(
    @CurrentUser() user: Personnel,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    this.logger.log(
      `Demande de changement de mot de passe pour: ${user.email_travail}`,
    );
    return this.authService.changePassword(
      user.id_personnel,
      changePasswordDto,
    );
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getProfile(
    @CurrentUser()
    user: Personnel & {
      service?: { nom_service: string; direction?: { nom_direction: string } };
    },
  ) {
    return {
      id: user.id_personnel,
      nom: user.nom_personnel,
      prenom: user.prenom_personnel,
      email: user.email_travail,
      role: user.role_personnel,
      type: user.type_personnel,
      matricule: user.matricule_personnel,
      telephone: user.telephone_travail,
      service: user.service?.nom_service,
      direction: user.service?.direction?.nom_direction,
    };
  }
}
