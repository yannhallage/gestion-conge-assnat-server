import { Controller, Get, Post, Put, Delete, Body, UseGuards, Param, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ChefdeserviceService } from './chefdeservice.service';
import { ApproveDemandeDto, RejectDemandeDto, InvitePersonnelDto } from './dto/chef.dto';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { Roles } from '../shared/decorators/roles.decorator';
import { CurrentUser } from '../shared/decorators/current-user.decorator';
import type { Personnel } from '@prisma/client';
import { RolePersonnel } from '@prisma/client';

type ChefWithRelations = Personnel & {
  service?: {
    nom_service: string;
    direction?: {
      nom_direction: string;
    };
  };
};

@ApiTags('Chef de Service')
@Controller('chef')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ChefdeserviceController {
  private readonly logger = new Logger(ChefdeserviceController.name);

  constructor(private readonly chefdeserviceService: ChefdeserviceService) { }

  @Get('demandes')
  @Roles(RolePersonnel.CHEF_SERVICE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter toutes les demandes de son service' })
  @ApiResponse({ status: 200, description: 'Liste des demandes du service' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getServiceDemandes(@CurrentUser() chef: ChefWithRelations) {
    this.logger.log(`Récupération des demandes du service par ${chef.email_travail}`);
    return this.chefdeserviceService.getServiceDemandes(chef);
  }

  @Put('demandes/:id/approve')
  @Roles(RolePersonnel.CHEF_SERVICE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Approuver une demande de congé' })
  @ApiResponse({ status: 200, description: 'Demande approuvée avec succès' })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async approveDemande(
    @CurrentUser() chef: ChefWithRelations,
    @Param('id') demandeId: string,
    @Body() approveDto: ApproveDemandeDto,
  ) {
    this.logger.log(`Approbation de la demande ${demandeId} par ${chef.email_travail}`);
    return this.chefdeserviceService.approveDemande(chef, demandeId, approveDto);
  }

  @Put('demandes/:id/reject')
  @Roles(RolePersonnel.CHEF_SERVICE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Refuser une demande de congé' })
  @ApiResponse({ status: 200, description: 'Demande refusée avec succès' })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async rejectDemande(
    @CurrentUser() chef: ChefWithRelations,
    @Param('id') demandeId: string,
    @Body() rejectDto: RejectDemandeDto,
  ) {
    this.logger.log(`Refus de la demande ${demandeId} par ${chef.email_travail}`);
    return this.chefdeserviceService.rejectDemande(chef, demandeId, rejectDto);
  }

  @Put('demandes/:id/revoke')
  @Roles(RolePersonnel.CHEF_SERVICE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Révoquer une demande approuvée' })
  @ApiResponse({ status: 200, description: 'Demande révoquée avec succès' })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async revokeDemande(
    @CurrentUser() chef: ChefWithRelations,
    @Param('id') demandeId: string,
  ) {
    this.logger.log(`Révocation de la demande ${demandeId} par ${chef.email_travail}`);
    return this.chefdeserviceService.revokeDemande(chef, demandeId);
  }

  @Delete('demandes/:id')
  @Roles(RolePersonnel.CHEF_SERVICE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Supprimer une demande' })
  @ApiResponse({ status: 200, description: 'Demande supprimée avec succès' })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async deleteDemande(
    @CurrentUser() chef: ChefWithRelations,
    @Param('id') demandeId: string,
  ) {
    this.logger.log(`Suppression de la demande ${demandeId} par ${chef.email_travail}`);
    return this.chefdeserviceService.deleteDemande(chef, demandeId);
  }

  @Post('personnel/invite')
  @Roles(RolePersonnel.CHEF_SERVICE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Inviter un nouveau personnel par email' })
  @ApiResponse({ status: 201, description: 'Personnel invité avec succès' })
  @ApiResponse({ status: 400, description: 'Email déjà utilisé' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async invitePersonnel(
    @CurrentUser() chef: ChefWithRelations,
    @Body() inviteDto: InvitePersonnelDto,
  ) {
    this.logger.log(`Invitation d'un nouveau personnel par ${chef.email_travail}`);
    return this.chefdeserviceService.invitePersonnel(chef, inviteDto);
  }

  @Get('personnel')
  @Roles(RolePersonnel.CHEF_SERVICE)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Consulter le personnel de son service' })
  @ApiResponse({ status: 200, description: 'Liste du personnel du service' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async getServicePersonnel(@CurrentUser() chef: ChefWithRelations) {
    this.logger.log(`Récupération du personnel du service par ${chef.email_travail}`);
    return this.chefdeserviceService.getServicePersonnel(chef);
  }
}
