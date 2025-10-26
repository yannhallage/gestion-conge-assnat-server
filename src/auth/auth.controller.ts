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

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Connexion utilisateur' })
  @ApiResponse({ status: 200, description: 'Connexion réussie' })
  @ApiResponse({ status: 401, description: 'Email ou mot de passe incorrect' })
  async login(@Body() loginDto: LoginDto) {
    this.logger.log(`Tentative de connexion pour: ${loginDto.email}`);
    return this.authService.login(loginDto);
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
