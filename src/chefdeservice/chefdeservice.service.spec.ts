import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { ChefdeserviceService } from './chefdeservice.service';
import { PrismaService } from '../shared/prisma/prisma.service';
import { EmailService } from '../shared/services/email.service';
import { AuthService } from '../auth/auth.service';

describe('ChefdeserviceService', () => {
  let service: ChefdeserviceService;
  let prismaService: PrismaService;
  let emailService: EmailService;
  let authService: AuthService;

  const mockChef = {
    id_personnel: 'chef-1',
    email_travail: 'chef@assnat.qc.ca',
    id_service: 'service-1',
    role_personnel: 'CHEF_SERVICE',
  };

  const mockDemande = {
    id_demande: 'demande-1',
    statut_demande: 'EN_ATTENTE',
    id_service: 'service-1',
    personnel: {
      email_personnel: 'user@example.com',
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChefdeserviceService,
        {
          provide: PrismaService,
          useValue: {
            demande: {
              findMany: jest.fn(),
              findFirst: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
            discussion: {
              create: jest.fn(),
              deleteMany: jest.fn(),
            },
            ficheDeConge: {
              deleteMany: jest.fn(),
            },
            personnel: {
              findFirst: jest.fn(),
              create: jest.fn(),
              findMany: jest.fn(),
            },
            service: {
              update: jest.fn(),
            },
          },
        },
        {
          provide: EmailService,
          useValue: {
            sendNotificationEmail: jest.fn(),
            sendInvitationEmail: jest.fn(),
          },
        },
        {
          provide: AuthService,
          useValue: {
            generateTemporaryPassword: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ChefdeserviceService>(ChefdeserviceService);
    prismaService = module.get<PrismaService>(PrismaService);
    emailService = module.get<EmailService>(EmailService);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('approveDemande', () => {
    it('should approve a demande successfully', async () => {
      const approveDto = { commentaire: 'Approuvé' };

      jest.spyOn(prismaService.demande, 'findFirst').mockResolvedValue(mockDemande as any);
      jest.spyOn(prismaService.demande, 'update').mockResolvedValue({ ...mockDemande, statut_demande: 'APPROUVEE' } as any);
      jest.spyOn(prismaService.discussion, 'create').mockResolvedValue({} as any);
      jest.spyOn(emailService, 'sendNotificationEmail').mockResolvedValue(undefined);

      const result = await service.approveDemande(mockChef as any, 'demande-1', approveDto);

      expect(result.statut_demande).toBe('APPROUVEE');
      expect(prismaService.demande.update).toHaveBeenCalledWith({
        where: { id_demande: 'demande-1' },
        data: { statut_demande: 'APPROUVEE' },
      });
      expect(emailService.sendNotificationEmail).toHaveBeenCalled();
    });

    it('should throw NotFoundException when demande is not found', async () => {
      const approveDto = { commentaire: 'Approuvé' };

      jest.spyOn(prismaService.demande, 'findFirst').mockResolvedValue(null);

      await expect(service.approveDemande(mockChef as any, 'invalid-demande', approveDto))
        .rejects.toThrow(NotFoundException);
    });
  });

  describe('rejectDemande', () => {
    it('should reject a demande successfully', async () => {
      const rejectDto = { motif: 'Période non disponible' };

      jest.spyOn(prismaService.demande, 'findFirst').mockResolvedValue(mockDemande as any);
      jest.spyOn(prismaService.demande, 'update').mockResolvedValue({ ...mockDemande, statut_demande: 'REFUSEE' } as any);
      jest.spyOn(prismaService.discussion, 'create').mockResolvedValue({} as any);
      jest.spyOn(emailService, 'sendNotificationEmail').mockResolvedValue(undefined);

      const result = await service.rejectDemande(mockChef as any, 'demande-1', rejectDto);

      expect(result.statut_demande).toBe('REFUSEE');
      expect(prismaService.discussion.create).toHaveBeenCalledWith({
        data: {
          message: `[REFUSÉE] Motif: ${rejectDto.motif}`,
          id_demande: 'demande-1',
        },
      });
    });
  });

  describe('invitePersonnel', () => {
    it('should invite personnel successfully', async () => {
      const inviteDto = {
        nom_personnel: 'Dupont',
        prenom_personnel: 'Jean',
        email_travail: 'jean.dupont@assnat.qc.ca',
        type_personnel: 'PERMANENT' as const,
      };

      jest.spyOn(prismaService.personnel, 'findFirst').mockResolvedValue(null);
      jest.spyOn(authService, 'generateTemporaryPassword').mockResolvedValue('temp123');
      jest.spyOn(prismaService.personnel, 'create').mockResolvedValue({
        id_personnel: 'new-personnel',
        email_travail: inviteDto.email_travail,
      } as any);
      jest.spyOn(emailService, 'sendInvitationEmail').mockResolvedValue(undefined);
      jest.spyOn(prismaService.service, 'update').mockResolvedValue({} as any);

      const result = await service.invitePersonnel(mockChef as any, inviteDto);

      expect(result.message).toBe('Personnel invité avec succès');
      expect(emailService.sendInvitationEmail).toHaveBeenCalledWith(
        inviteDto.email_travail,
        'temp123',
        inviteDto.nom_personnel,
        inviteDto.prenom_personnel,
      );
    });

    it('should throw BadRequestException when email already exists', async () => {
      const inviteDto = {
        nom_personnel: 'Dupont',
        prenom_personnel: 'Jean',
        email_travail: 'existing@assnat.qc.ca',
        type_personnel: 'PERMANENT' as const,
      };

      jest.spyOn(prismaService.personnel, 'findFirst').mockResolvedValue({ id_personnel: 'existing' } as any);

      await expect(service.invitePersonnel(mockChef as any, inviteDto))
        .rejects.toThrow(BadRequestException);
    });
  });
});
