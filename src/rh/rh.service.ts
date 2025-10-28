import { Injectable, NotFoundException, Logger, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../shared/prisma/prisma.service';
import { CreateDirectionDto } from './dto/create-direction.dto';
import { CreateServiceDto } from './dto/create-service.dto';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { EmailService } from 'src/shared/mail/mail.service';

@Injectable()
export class RhService {
  private readonly logger = new Logger(RhService.name);

  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) { }

  // -----------------------------
  // Directions
  // -----------------------------
  async createDirection(dto: CreateDirectionDto) {
    return this.prisma.direction.create({ data: dto });
  }

  async getAllDirections() {
    return this.prisma.direction.findMany({
      include: { services: true },
    });
  }

  async getDirectionById(id: string) {
    const direction = await this.prisma.direction.findUnique({
      where: { id_direction: id },
      include: { services: true },
    });
    if (!direction) throw new NotFoundException('Direction non trouvée');
    return direction;
  }

  // -----------------------------
  // Services
  // -----------------------------
  async createService(dto: CreateServiceDto) {
    return this.prisma.service.create({ data: dto });
  }

  async getAllServices() {
    return this.prisma.service.findMany({ include: { personnels: true } });
  }

  async getServiceById(id: string) {
    const service = await this.prisma.service.findUnique({
      where: { id_service: id },
      include: { personnels: true, direction: true },
    });
    if (!service) throw new NotFoundException('Service non trouvé');
    return service;
  }

  // -----------------------------
  // Créer un personnel et envoyer un email de notification
  // -----------------------------
  /**
   * Crée un nouveau personnel dans le système.
   * Le mot de passe est hashé avant l'enregistrement.
   * Un email de bienvenue est envoyé.
   */
  async createPersonnel(dto: CreatePersonnelDto) {
    if (!dto.password) {
      throw new BadRequestException('Le mot de passe est requis');
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    try {
      const personnel = await this.prisma.personnel.create({
        data: {
          ...dto,
          password: hashedPassword,
        },
        include: { service: true },
      });

      this.logger.log(`Personnel créé : ${personnel.nom_personnel} ${personnel.prenom_personnel}`);

      const message = `
        <p>Bonjour ${personnel.prenom_personnel} ${personnel.nom_personnel},</p>
        <p>Votre compte a été créé avec succès dans le système de gestion des congés.</p>
        <p>Vous pouvez maintenant accéder à votre interface dédiée.</p>
      `;

      try {
        await this.emailService.sendNotificationEmail(
          personnel.email_travail!,
          'Bienvenue dans le système de gestion des congés',
          message,
        );
        this.logger.log(`Email de bienvenue envoyé à ${personnel.email_travail}`);
      } catch (emailError) {
        this.logger.error(
          `Échec de l'envoi de l'email à ${personnel.email_travail}: ${emailError.message}`,
        );
      }

      return personnel;
    } catch (error) {
      this.logger.error(`Erreur lors de la création du personnel: ${error.message}`);
      throw new BadRequestException('Impossible de créer le personnel');
    }
  }

  async getAllPersonnel() {
    return this.prisma.personnel.findMany({ include: { service: true } });
  }

  async getPersonnelById(id: string) {
    const personnel = await this.prisma.personnel.findUnique({
      where: { id_personnel: id },
      include: {
        service: true,
        demandes: true
      },
    });

    if (!personnel) {
      throw new NotFoundException('Personnel non trouvé');
    }

    return personnel;
  }


  async updatePersonnel(id: string, dto: UpdatePersonnelDto) {
    return this.prisma.personnel.update({
      where: { id_personnel: id },
      data: dto,
    });
  }

  async deletePersonnel(id: string) {
    return this.prisma.personnel.update({
      where: { id_personnel: id },
      data: { is_active: false },
    });
  }

  // -----------------------------
  // Statistiques RH
  // -----------------------------
  async getStatistics() {
    const totalPersonnel = await this.prisma.personnel.count();
    const totalDirections = await this.prisma.direction.count();
    const totalServices = await this.prisma.service.count();

    return {
      totalPersonnel,
      totalDirections,
      totalServices,
    };
  }

  // -----------------------------
  // Alertes
  // -----------------------------
  async createAlert(dto: CreateAlertDto) {
    // Ici on peut juste créer une table alerts si tu veux
    // Pour l'exemple, on logue
    this.logger.log(`Alerte créée : ${JSON.stringify(dto)}`);
    return { message: 'Alerte créée', data: dto };
  }

  // -----------------------------
  // Consulter toutes les demandes
  // -----------------------------
  async consulterDemandes() {
    return this.prisma.demande.findMany({
      include: {
        periodeConge: true,
        service: true,
      },
    });
  }
}
