import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { CreateDemandeDto, CreatePeriodeCongeDto, CreateDiscussionDto } from './dto/user.dto';
import { Personnel, StatutDemande } from '@prisma/client';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private prisma: PrismaService) {}

  async createDemande(user: Personnel, createDemandeDto: CreateDemandeDto) {
    this.logger.log(`Création d'une nouvelle demande par ${user.email_travail}`);

    // Vérifier que la période de congé existe
    const periodeConge = await this.prisma.periodeConge.findUnique({
      where: { id_periodeconge: createDemandeDto.id_periodeconge },
      include: { typeConge: true },
    });

    if (!periodeConge) {
      throw new NotFoundException('Période de congé non trouvée');
    }

    // Vérifier que l'utilisateur n'a pas déjà une demande en cours pour cette période
    const existingDemande = await this.prisma.demande.findFirst({
      where: {
        id_personnel: user.id_personnel,
        id_periodeconge: createDemandeDto.id_periodeconge,
        statut_demande: { in: ['EN_ATTENTE', 'APPROUVEE'] },
      },
    });

    if (existingDemande) {
      throw new BadRequestException('Vous avez déjà une demande en cours pour cette période');
    }

    // Trouver le chef de service du service de l'utilisateur
    const chefService = await this.prisma.personnel.findFirst({
      where: {
        id_service: user.id_service,
        role_personnel: 'CHEF_SERVICE',
        is_active: true,
      },
    });

    const demande = await this.prisma.demande.create({
      data: {
        type_demande: createDemandeDto.type_demande,
        motif: createDemandeDto.motif,
        id_personnel: user.id_personnel,
        id_service: user.id_service,
        id_periodeconge: createDemandeDto.id_periodeconge,
        id_chef_service: chefService?.id_personnel,
      },
      include: {
        periodeConge: {
          include: { typeConge: true },
        },
        service: true,
      },
    });

    this.logger.log(`Demande créée avec succès: ${demande.id_demande}`);
    return demande;
  }

  async getMyDemandes(user: Personnel) {
    this.logger.log(`Récupération des demandes pour ${user.email_travail}`);

    const demandes = await this.prisma.demande.findMany({
      where: { id_personnel: user.id_personnel },
      include: {
        periodeConge: {
          include: { typeConge: true },
        },
        service: true,
        discussions: {
          orderBy: { date_message: 'desc' },
        },
        ficheDeConge: true,
      },
      orderBy: { date_demande: 'desc' },
    });

    return demandes;
  }

  async getMyFichesConge(user: Personnel) {
    this.logger.log(`Récupération des fiches de congé pour ${user.email_travail}`);

    const fichesConge = await this.prisma.ficheDeConge.findMany({
      where: { id_personnel: user.id_personnel },
      include: {
        demande: {
          include: {
            periodeConge: {
              include: { typeConge: true },
            },
          },
        },
      },
      orderBy: { date_message: 'desc' },
    });

    return fichesConge;
  }

  async getTypesConge() {
    this.logger.log('Récupération des types de congé disponibles');

    const typesConge = await this.prisma.typeConge.findMany({
      where: { is_active: true },
      orderBy: { libelle_typeconge: 'asc' },
    });

    return typesConge;
  }

  async createPeriodeConge(user: Personnel, createPeriodeCongeDto: CreatePeriodeCongeDto) {
    this.logger.log(`Création d'une période de congé par ${user.email_travail}`);

    // Vérifier que le type de congé existe
    const typeConge = await this.prisma.typeConge.findUnique({
      where: { id_typeconge: createPeriodeCongeDto.id_typeconge },
    });

    if (!typeConge) {
      throw new NotFoundException('Type de congé non trouvé');
    }

    // Vérifier que la date de début est antérieure à la date de fin
    const dateDebut = new Date(createPeriodeCongeDto.date_debut);
    const dateFin = new Date(createPeriodeCongeDto.date_fin);

    if (dateDebut >= dateFin) {
      throw new BadRequestException('La date de début doit être antérieure à la date de fin');
    }

    const periodeConge = await this.prisma.periodeConge.create({
      data: {
        date_debut: dateDebut,
        date_fin: dateFin,
        nb_jour: createPeriodeCongeDto.nb_jour,
        id_typeconge: createPeriodeCongeDto.id_typeconge,
      },
      include: { typeConge: true },
    });

    this.logger.log(`Période de congé créée avec succès: ${periodeConge.id_periodeconge}`);
    return periodeConge;
  }

  async addDiscussionToDemande(user: Personnel, demandeId: string, createDiscussionDto: CreateDiscussionDto) {
    this.logger.log(`Ajout d'une discussion à la demande ${demandeId} par ${user.email_travail}`);

    // Vérifier que la demande existe et appartient à l'utilisateur
    const demande = await this.prisma.demande.findFirst({
      where: {
        id_demande: demandeId,
        id_personnel: user.id_personnel,
      },
    });

    if (!demande) {
      throw new NotFoundException('Demande non trouvée ou non autorisée');
    }

    const discussion = await this.prisma.discussion.create({
      data: {
        message: createDiscussionDto.message,
        heure_message: createDiscussionDto.heure_message,
        id_demande: demandeId,
      },
    });

    this.logger.log(`Discussion ajoutée avec succès: ${discussion.id_discussion}`);
    return discussion;
  }

  async getDemandeDetails(user: Personnel, demandeId: string) {
    this.logger.log(`Récupération des détails de la demande ${demandeId} par ${user.email_travail}`);

    const demande = await this.prisma.demande.findFirst({
      where: {
        id_demande: demandeId,
        id_personnel: user.id_personnel,
      },
      include: {
        periodeConge: {
          include: { typeConge: true },
        },
        service: true,
        discussions: {
          orderBy: { date_message: 'asc' },
        },
        ficheDeConge: true,
      },
    });

    if (!demande) {
      throw new NotFoundException('Demande non trouvée ou non autorisée');
    }

    return demande;
  }
}
