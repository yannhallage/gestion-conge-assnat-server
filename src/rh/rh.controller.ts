import { Controller, Get, Post, Put, Delete, Body, UseGuards, Param, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RhService } from './rh.service';
import { CreateDirectionDto, CreateServiceDto, CreatePersonnelDto, UpdatePersonnelDto } from './dto/rh.dto';
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

@ApiTags('Ressources Humaines')
@Controller('rh')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class RhController {
  private readonly logger = new Logger(RhController.name);

  constructor(private readonly rhService: RhService) { }

  // Gestion des Directions
  @Post('directions')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Créer une nouvelle direction' })
  @ApiResponse({ status: 201, description: 'Direction créée avec succès' })
  @ApiResponse({ status: 409, description: 'Code de direction déjà utilisé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async createDirection(
    @CurrentUser() user: PersonnelWithRelations,
    @Body() createDirectionDto: CreateDirectionDto,
  ) {
    this.logger.log(`Création d'une direction par ${user.email_travail}`);
    return this.rhService.createDirection(createDirectionDto);
  }

  @Get('directions')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter toutes les directions' })
  @ApiResponse({ status: 200, description: 'Liste des directions' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getAllDirections(@CurrentUser() user: PersonnelWithRelations) {
    this.logger.log(`Récupération des directions par ${user.email_travail}`);
    return this.rhService.getAllDirections();
  }

  @Get('directions/:id')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter une direction par ID' })
  @ApiResponse({ status: 200, description: 'Détails de la direction' })
  @ApiResponse({ status: 404, description: 'Direction non trouvée' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getDirectionById(
    @CurrentUser() user: PersonnelWithRelations,
    @Param('id') id: string,
  ) {
    this.logger.log(`Récupération de la direction ${id} par ${user.email_travail}`);
    return this.rhService.getDirectionById(id);
  }

  // Gestion des Services
  @Post('services')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Créer un nouveau service' })
  @ApiResponse({ status: 201, description: 'Service créé avec succès' })
  @ApiResponse({ status: 404, description: 'Direction non trouvée' })
  @ApiResponse({ status: 409, description: 'Code de service déjà utilisé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async createService(
    @CurrentUser() user: PersonnelWithRelations,
    @Body() createServiceDto: CreateServiceDto,
  ) {
    this.logger.log(`Création d'un service par ${user.email_travail}`);
    return this.rhService.createService(createServiceDto);
  }

  @Get('services')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter tous les services' })
  @ApiResponse({ status: 200, description: 'Liste des services' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getAllServices(@CurrentUser() user: PersonnelWithRelations) {
    this.logger.log(`Récupération des services par ${user.email_travail}`);
    return this.rhService.getAllServices();
  }

  @Get('services/:id')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter un service par ID' })
  @ApiResponse({ status: 200, description: 'Détails du service' })
  @ApiResponse({ status: 404, description: 'Service non trouvé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getServiceById(
    @CurrentUser() user: PersonnelWithRelations,
    @Param('id') id: string,
  ) {
    this.logger.log(`Récupération du service ${id} par ${user.email_travail}`);
    return this.rhService.getServiceById(id);
  }

  // Gestion du Personnel
  @Post('personnel')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Ajouter un nouveau personnel' })
  @ApiResponse({ status: 201, description: 'Personnel créé avec succès' })
  @ApiResponse({ status: 404, description: 'Service non trouvé' })
  @ApiResponse({ status: 409, description: 'Email ou matricule déjà utilisé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async createPersonnel(
    @CurrentUser() user: PersonnelWithRelations,
    @Body() createPersonnelDto: CreatePersonnelDto,
  ) {
    this.logger.log(`Création d'un personnel par ${user.email_travail}`);
    return this.rhService.createPersonnel(createPersonnelDto);
  }

  @Get('personnel')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter tout le personnel' })
  @ApiResponse({ status: 200, description: 'Liste du personnel' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getAllPersonnel(@CurrentUser() user: PersonnelWithRelations) {
    this.logger.log(`Récupération du personnel par ${user.email_travail}`);
    return this.rhService.getAllPersonnel();
  }

  @Get('personnel/:id')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter un personnel par ID' })
  @ApiResponse({ status: 200, description: 'Détails du personnel' })
  @ApiResponse({ status: 404, description: 'Personnel non trouvé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getPersonnelById(
    @CurrentUser() user: PersonnelWithRelations,
    @Param('id') id: string,
  ) {
    this.logger.log(`Récupération du personnel ${id} par ${user.email_travail}`);
    return this.rhService.getPersonnelById(id);
  }

  @Put('personnel/:id')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Mettre à jour un personnel' })
  @ApiResponse({ status: 200, description: 'Personnel mis à jour avec succès' })
  @ApiResponse({ status: 404, description: 'Personnel non trouvé' })
  @ApiResponse({ status: 409, description: 'Email déjà utilisé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async updatePersonnel(
    @CurrentUser() user: PersonnelWithRelations,
    @Param('id') id: string,
    @Body() updatePersonnelDto: UpdatePersonnelDto,
  ) {
    this.logger.log(`Mise à jour du personnel ${id} par ${user.email_travail}`);
    return this.rhService.updatePersonnel(id, updatePersonnelDto);
  }

  @Delete('personnel/:id')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Désactiver un personnel' })
  @ApiResponse({ status: 200, description: 'Personnel désactivé avec succès' })
  @ApiResponse({ status: 404, description: 'Personnel non trouvé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async deletePersonnel(
    @CurrentUser() user: PersonnelWithRelations,
    @Param('id') id: string,
  ) {
    this.logger.log(`Désactivation du personnel ${id} par ${user.email_travail}`);
    return this.rhService.deletePersonnel(id);
  }

  // Statistiques
  @Get('statistics')
  @Roles(RolePersonnel.RH)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter les statistiques RH' })
  @ApiResponse({ status: 200, description: 'Statistiques RH' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getStatistics(@CurrentUser() user: PersonnelWithRelations) {
    this.logger.log(`Récupération des statistiques par ${user.email_travail}`);
    return this.rhService.getStatistics();
  }
}
