import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '../shared/prisma/prisma.service';

describe('UserService', () => {
  let service: UserService;
  let prismaService: PrismaService;

  const mockUser = {
    id_personnel: 'user-1',
    email_travail: 'test@assnat.qc.ca',
    id_service: 'service-1',
  };

  const mockPeriodeConge = {
    id_periodeconge: 'periode-1',
    date_debut: new Date('2024-07-01'),
    date_fin: new Date('2024-07-15'),
    nb_jour: 10,
    typeConge: {
      libelle_typeconge: 'Congé Annuel',
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            periodeConge: {
              findUnique: jest.fn(),
            },
            demande: {
              findFirst: jest.fn(),
              create: jest.fn(),
              findMany: jest.fn(),
            },
            personnel: {
              findFirst: jest.fn(),
            },
            ficheDeConge: {
              findMany: jest.fn(),
            },
            typeConge: {
              findMany: jest.fn(),
            },
            discussion: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createDemande', () => {
    it('should create a demande successfully', async () => {
      const createDemandeDto = {
        type_demande: 'Congé Annuel',
        motif: 'Vacances',
        id_periodeconge: 'periode-1',
      };

      jest.spyOn(prismaService.periodeConge, 'findUnique').mockResolvedValue(mockPeriodeConge as any);
      jest.spyOn(prismaService.demande, 'findFirst').mockResolvedValue(null);
      jest.spyOn(prismaService.personnel, 'findFirst').mockResolvedValue({ id_personnel: 'chef-1' } as any);
      jest.spyOn(prismaService.demande, 'create').mockResolvedValue({ id_demande: 'demande-1' } as any);

      const result = await service.createDemande(mockUser as any, createDemandeDto);

      expect(result).toEqual({ id_demande: 'demande-1' });
      expect(prismaService.demande.create).toHaveBeenCalledWith({
        data: {
          type_demande: createDemandeDto.type_demande,
          motif: createDemandeDto.motif,
          id_personnel: mockUser.id_personnel,
          id_service: mockUser.id_service,
          id_periodeconge: createDemandeDto.id_periodeconge,
          id_chef_service: 'chef-1',
        },
        include: {
          periodeConge: {
            include: { typeConge: true },
          },
          service: true,
        },
      });
    });

    it('should throw NotFoundException when periodeConge does not exist', async () => {
      const createDemandeDto = {
        type_demande: 'Congé Annuel',
        motif: 'Vacances',
        id_periodeconge: 'invalid-periode',
      };

      jest.spyOn(prismaService.periodeConge, 'findUnique').mockResolvedValue(null);

      await expect(service.createDemande(mockUser as any, createDemandeDto))
        .rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException when demande already exists', async () => {
      const createDemandeDto = {
        type_demande: 'Congé Annuel',
        motif: 'Vacances',
        id_periodeconge: 'periode-1',
      };

      jest.spyOn(prismaService.periodeConge, 'findUnique').mockResolvedValue(mockPeriodeConge as any);
      jest.spyOn(prismaService.demande, 'findFirst').mockResolvedValue({ id_demande: 'existing-demande' } as any);

      await expect(service.createDemande(mockUser as any, createDemandeDto))
        .rejects.toThrow(BadRequestException);
    });
  });

  describe('getMyDemandes', () => {
    it('should return user demandes', async () => {
      const mockDemandes = [
        { id_demande: 'demande-1', statut_demande: 'EN_ATTENTE' },
        { id_demande: 'demande-2', statut_demande: 'APPROUVEE' },
      ];

      jest.spyOn(prismaService.demande, 'findMany').mockResolvedValue(mockDemandes as any);

      const result = await service.getMyDemandes(mockUser as any);

      expect(result).toEqual(mockDemandes);
      expect(prismaService.demande.findMany).toHaveBeenCalledWith({
        where: { id_personnel: mockUser.id_personnel },
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
    });
  });

  describe('getTypesConge', () => {
    it('should return active types of conge', async () => {
      const mockTypes = [
        { id_typeconge: 'type-1', libelle_typeconge: 'Congé Annuel' },
        { id_typeconge: 'type-2', libelle_typeconge: 'Congé Maladie' },
      ];

      jest.spyOn(prismaService.typeConge, 'findMany').mockResolvedValue(mockTypes as any);

      const result = await service.getTypesConge();

      expect(result).toEqual(mockTypes);
      expect(prismaService.typeConge.findMany).toHaveBeenCalledWith({
        where: { is_active: true },
        orderBy: { libelle_typeconge: 'asc' },
      });
    });
  });
});
