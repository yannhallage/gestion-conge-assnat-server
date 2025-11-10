import { Injectable, NotFoundException, BadRequestException, Logger, ConflictException } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { CreateDirectionDto, CreateServiceDto, CreatePersonnelDto, UpdatePersonnelDto } from './dto/rh.dto';
import { Personnel, RolePersonnel } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class RhService {
  private readonly logger = new Logger(RhService.name);

  constructor(private prisma: PrismaService) {}

  // Gestion des Directions
  async createDirection(createDirectionDto: CreateDirectionDto) {
    this.logger.log(`Création d'une nouvelle direction: ${createDirectionDto.nom_direction}`);

    // Vérifier que le code de direction n'existe pas déjà
    const existingDirection = await this.prisma.direction.findUnique({
      where: { code_direction: createDirectionDto.code_direction },
    });

    if (existingDirection) {
      throw new ConflictException('Une direction avec ce code existe déjà');
    }

    const direction = await this.prisma.direction.create({
      data: {
        code_direction: createDirectionDto.code_direction,
        nom_direction: createDirectionDto.nom_direction,
        nom_directeur: createDirectionDto.nom_directeur,
        email_direction: createDirectionDto.email_direction,
        statut: createDirectionDto.statut || 'ACTIF',
        nb_personnel: 0,
      },
    });

    this.logger.log(`Direction créée avec succès: ${direction.id_direction}`);
    return direction;
  }

  async getAllDirections() {
    this.logger.log('Récupération de toutes les directions');

    const directions = await this.prisma.direction.findMany({
      include: {
        services: {
          include: {
            _count: {
              select: { personnels: true },
            },
          },
        },
        _count: {
          select: { services: true },
        },
      },
      orderBy: { nom_direction: 'asc' },
    });

    return directions;
  }

  async getDirectionById(id: string) {
    this.logger.log(`Récupération de la direction: ${id}`);

    const direction = await this.prisma.direction.findUnique({
      where: { id_direction: id },
      include: {
        services: {
          include: {
            _count: {
              select: { personnels: true },
            },
          },
        },
      },
    });

    if (!direction) {
      throw new NotFoundException('Direction non trouvée');
    }

    return direction;
  }

  // Gestion des Services
  async createService(createServiceDto: CreateServiceDto) {
    this.logger.log(`Création d'un nouveau service: ${createServiceDto.nom_service}`);

    // Vérifier que la direction existe
    const direction = await this.prisma.direction.findUnique({
      where: { id_direction: createServiceDto.id_direction },
    });

    if (!direction) {
      throw new NotFoundException('Direction non trouvée');
    }

    // Vérifier que le code de service n'existe pas déjà
    const existingService = await this.prisma.service.findUnique({
      where: { code_service: createServiceDto.code_service },
    });

    if (existingService) {
      throw new ConflictException('Un service avec ce code existe déjà');
    }

    const service = await this.prisma.service.create({
      data: {
        code_service: createServiceDto.code_service,
        nom_service: createServiceDto.nom_service,
        id_direction: createServiceDto.id_direction,
        nb_personnel: 0,
      },
      include: { direction: true },
    });

    // Mettre à jour le nombre de services de la direction
    await this.prisma.direction.update({
      where: { id_direction: createServiceDto.id_direction },
      data: {
        nb_personnel: {
          increment: 0, // Pas de personnel ajouté, juste le service
        },
      },
    });

    this.logger.log(`Service créé avec succès: ${service.id_service}`);
    return service;
  }

  async getAllServices() {
    this.logger.log('Récupération de tous les services');

    const services = await this.prisma.service.findMany({
      include: {
        direction: true,
        _count: {
          select: { personnels: true },
        },
      },
      orderBy: { nom_service: 'asc' },
    });

    return services;
  }

  async getServiceById(id: string) {
    this.logger.log(`Récupération du service: ${id}`);

    const service = await this.prisma.service.findUnique({
      where: { id_service: id },
      include: {
        direction: true,
        personnels: {
          where: { is_active: true },
          include: {
            _count: {
              select: { demandes: true },
            },
          },
        },
      },
    });

    if (!service) {
      throw new NotFoundException('Service non trouvé');
    }

    return service;
  }

  // Gestion du Personnel
  async createPersonnel(createPersonnelDto: CreatePersonnelDto) {
    this.logger.log(`Création d'un nouveau personnel: ${createPersonnelDto.email_travail}`);

    // Vérifier que le service existe
    const service = await this.prisma.service.findUnique({
      where: { id_service: createPersonnelDto.id_service },
    });

    if (!service) {
      throw new NotFoundException('Service non trouvé');
    }

    // Vérifier que l'email n'existe pas déjà
    const existingPersonnel = await this.prisma.personnel.findFirst({
      where: {
        OR: [
          { email_travail: createPersonnelDto.email_travail },
          { email_personnel: createPersonnelDto.email_personnel },
        ],
      },
    });

    if (existingPersonnel) {
      throw new ConflictException('Un personnel avec cet email existe déjà');
    }

    // Vérifier que le matricule n'existe pas déjà
    if (createPersonnelDto.matricule_personnel) {
      const existingMatricule = await this.prisma.personnel.findUnique({
        where: { matricule_personnel: createPersonnelDto.matricule_personnel },
      });

      if (existingMatricule) {
        throw new ConflictException('Un personnel avec ce matricule existe déjà');
      }
    }

    const hashedPassword = await bcrypt.hash(createPersonnelDto.password, 10);

    const personnel = await this.prisma.personnel.create({
      data: {
        nom_personnel: createPersonnelDto.nom_personnel,
        prenom_personnel: createPersonnelDto.prenom_personnel,
        email_travail: createPersonnelDto.email_travail,
        email_personnel: createPersonnelDto.email_personnel,
        password: hashedPassword,
        matricule_personnel: createPersonnelDto.matricule_personnel,
        telephone_travail: createPersonnelDto.telephone_travail,
        telephone_personnel: createPersonnelDto.telephone_personnel,
        ville_personnel: createPersonnelDto.ville_personnel,
        adresse_personnel: createPersonnelDto.adresse_personnel,
        codepostal: createPersonnelDto.codepostal,
        pays_personnel: createPersonnelDto.pays_personnel,
        telephone_contact_urgence: createPersonnelDto.telephone_contact_urgence,
        nom_contact_urgence: createPersonnelDto.nom_contact_urgence,
        role_personnel: createPersonnelDto.role_personnel,
        type_personnel: createPersonnelDto.type_personnel,
        id_service: createPersonnelDto.id_service,
      },
      include: { service: { include: { direction: true } } },
    });

    // Mettre à jour le nombre de personnel du service
    await this.prisma.service.update({
      where: { id_service: createPersonnelDto.id_service },
      data: {
        nb_personnel: {
          increment: 1,
        },
      },
    });

    // Mettre à jour le nombre de personnel de la direction
    await this.prisma.direction.update({
      where: { id_direction: service.id_direction },
      data: {
        nb_personnel: {
          increment: 1,
        },
      },
    });

    this.logger.log(`Personnel créé avec succès: ${personnel.id_personnel}`);
    return personnel;
  }

  async getAllPersonnel() {
    this.logger.log('Récupération de tout le personnel');

    const personnel = await this.prisma.personnel.findMany({
      include: {
        service: {
          include: { direction: true },
        },
        _count: {
          select: {
            demandes: true,
            fichesConge: true,
          },
        },
      },
      orderBy: { nom_personnel: 'asc' },
    });

    return personnel;
  }

  async getPersonnelById(id: string) {
    this.logger.log(`Récupération du personnel: ${id}`);

    const personnel = await this.prisma.personnel.findUnique({
      where: { id_personnel: id },
      include: {
        service: {
          include: { direction: true },
        },
        demandes: {
          include: {
            periodeConge: {
              include: { typeConge: true },
            },
          },
          orderBy: { date_demande: 'desc' },
        },
        fichesConge: {
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
        },
      },
    });

    if (!personnel) {
      throw new NotFoundException('Personnel non trouvé');
    }

    return personnel;
  }

  async updatePersonnel(id: string, updatePersonnelDto: UpdatePersonnelDto) {
    this.logger.log(`Mise à jour du personnel: ${id}`);

    const existingPersonnel = await this.prisma.personnel.findUnique({
      where: { id_personnel: id },
    });

    if (!existingPersonnel) {
      throw new NotFoundException('Personnel non trouvé');
    }

    // Vérifier que l'email n'existe pas déjà (si modifié)
    if (updatePersonnelDto.email_travail && updatePersonnelDto.email_travail !== existingPersonnel.email_travail) {
      const existingEmail = await this.prisma.personnel.findFirst({
        where: {
          email_travail: updatePersonnelDto.email_travail,
          id_personnel: { not: id },
        },
      });

      if (existingEmail) {
        throw new ConflictException('Un personnel avec cet email existe déjà');
      }
    }

    const updatedPersonnel = await this.prisma.personnel.update({
      where: { id_personnel: id },
      data: updatePersonnelDto,
      include: { service: { include: { direction: true } } },
    });

    this.logger.log(`Personnel mis à jour avec succès: ${id}`);
    return updatedPersonnel;
  }

  async deletePersonnel(id: string) {
    this.logger.log(`Suppression du personnel: ${id}`);

    const personnel = await this.prisma.personnel.findUnique({
      where: { id_personnel: id },
      include: { service: true },
    });

    if (!personnel) {
      throw new NotFoundException('Personnel non trouvé');
    }

    // Désactiver au lieu de supprimer
    await this.prisma.personnel.update({
      where: { id_personnel: id },
      data: { is_active: false },
    });

    // Mettre à jour les compteurs
    await this.prisma.service.update({
      where: { id_service: personnel.id_service },
      data: {
        nb_personnel: {
          decrement: 1,
        },
      },
    });

    await this.prisma.direction.update({
      where: { id_direction: personnel.service.id_direction },
      data: {
        nb_personnel: {
          decrement: 1,
        },
      },
    });

    this.logger.log(`Personnel désactivé avec succès: ${id}`);
    return { message: 'Personnel désactivé avec succès' };
  }

  // Statistiques
  async getStatistics() {
    this.logger.log('Récupération des statistiques RH');

    const [
      totalDirections,
      totalServices,
      totalPersonnel,
      totalDemandes,
      demandesEnAttente,
      demandesApprouvees,
      demandesRefusees,
    ] = await Promise.all([
      this.prisma.direction.count(),
      this.prisma.service.count(),
      this.prisma.personnel.count({ where: { is_active: true } }),
      this.prisma.demande.count(),
      this.prisma.demande.count({ where: { statut_demande: 'EN_ATTENTE' } }),
      this.prisma.demande.count({ where: { statut_demande: 'APPROUVEE' } }),
      this.prisma.demande.count({ where: { statut_demande: 'REFUSEE' } }),
    ]);

    return {
      directions: totalDirections,
      services: totalServices,
      personnel: totalPersonnel,
      demandes: {
        total: totalDemandes,
        en_attente: demandesEnAttente,
        approuvees: demandesApprouvees,
        refusees: demandesRefusees,
      },
    };
  }
}
