import { Controller, Get, Post, Body, UseGuards, Param, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateDemandeDto, CreatePeriodeCongeDto, CreateDiscussionDto } from './dto/user.dto';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { Roles } from '../shared/decorators/roles.decorator';
import { CurrentUser } from '../shared/decorators/current-user.decorator';
import type { Personnel } from '@prisma/client';
import { RolePersonnel } from '@prisma/client';

type PersonnelWithRelations = Personnel & {
  service?: {
    nom_service: string;
    direction?: {
      nom_direction: string;
    };
  };
};

@ApiTags('Utilisateur (Employé)')
@Controller('user')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) { }

  @Post('demandes')
  @Roles(RolePersonnel.EMPLOYE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Créer une nouvelle demande de congé' })
  @ApiResponse({ status: 201, description: 'Demande créée avec succès' })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async createDemande(
    @CurrentUser() user: PersonnelWithRelations,
    @Body() createDemandeDto: CreateDemandeDto,
  ) {
    this.logger.log(`Création d'une demande par ${user.email_travail}`);
    return this.userService.createDemande(user, createDemandeDto);
  }

  @Get('demandes')
  @Roles(RolePersonnel.EMPLOYE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter ses demandes de congé' })
  @ApiResponse({ status: 200, description: 'Liste des demandes' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getMyDemandes(@CurrentUser() user: PersonnelWithRelations) {
    this.logger.log(`Récupération des demandes pour ${user.email_travail}`);
    return this.userService.getMyDemandes(user);
  }

  @Get('demandes/:id')
  @Roles(RolePersonnel.EMPLOYE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter les détails d\'une demande' })
  @ApiResponse({ status: 200, description: 'Détails de la demande' })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getDemandeDetails(
    @CurrentUser() user: PersonnelWithRelations,
    @Param('id') demandeId: string,
  ) {
    this.logger.log(`Récupération des détails de la demande ${demandeId} par ${user.email_travail}`);
    return this.userService.getDemandeDetails(user, demandeId);
  }

  @Get('fiches-conge')
  @Roles(RolePersonnel.EMPLOYE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter ses fiches de congé' })
  @ApiResponse({ status: 200, description: 'Liste des fiches de congé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getMyFichesConge(@CurrentUser() user: PersonnelWithRelations) {
    this.logger.log(`Récupération des fiches de congé pour ${user.email_travail}`);
    return this.userService.getMyFichesConge(user);
  }

  @Get('types-conge')
  @Roles(RolePersonnel.EMPLOYE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter les types de congé disponibles' })
  @ApiResponse({ status: 200, description: 'Liste des types de congé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getTypesConge() {
    this.logger.log('Récupération des types de congé disponibles');
    return this.userService.getTypesConge();
  }

  @Post('periodes-conge')
  @Roles(RolePersonnel.EMPLOYE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Créer une période de congé' })
  @ApiResponse({ status: 201, description: 'Période de congé créée avec succès' })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async createPeriodeConge(
    @CurrentUser() user: PersonnelWithRelations,
    @Body() createPeriodeCongeDto: CreatePeriodeCongeDto,
  ) {
    this.logger.log(`Création d'une période de congé par ${user.email_travail}`);
    return this.userService.createPeriodeConge(user, createPeriodeCongeDto);
  }

  @Post('demandes/:id/discussions')
  @Roles(RolePersonnel.EMPLOYE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Ajouter une discussion à une demande' })
  @ApiResponse({ status: 201, description: 'Discussion ajoutée avec succès' })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async addDiscussionToDemande(
    @CurrentUser() user: PersonnelWithRelations,
    @Param('id') demandeId: string,
    @Body() createDiscussionDto: CreateDiscussionDto,
  ) {
    this.logger.log(`Ajout d'une discussion à la demande ${demandeId} par ${user.email_travail}`);
    return this.userService.addDiscussionToDemande(user, demandeId, createDiscussionDto);
  }
}
