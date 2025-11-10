import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { RhService } from './rh.service';
import { PrismaService } from '../shared/prisma/prisma.service';

describe('RhService', () => {
  let service: RhService;
  let prismaService: PrismaService;

  const mockDirection = {
    id_direction: 'dir-1',
    code_direction: 'DIR001',
    nom_direction: 'Direction Test',
    nom_directeur: 'Directeur Test',
  };

  const mockService = {
    id_service: 'service-1',
    code_service: 'SERV001',
    nom_service: 'Service Test',
    id_direction: 'dir-1',
  };

  const mockPersonnel = {
    id_personnel: 'personnel-1',
    nom_personnel: 'Dupont',
    prenom_personnel: 'Jean',
    email_travail: 'jean.dupont@assnat.qc.ca',
    role_personnel: 'EMPLOYE',
    type_personnel: 'PERMANENT',
    id_service: 'service-1',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RhService,
        {
          provide: PrismaService,
          useValue: {
            direction: {
              findUnique: jest.fn(),
              findMany: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              count: jest.fn(),
            },
            service: {
              findUnique: jest.fn(),
              findMany: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              count: jest.fn(),
            },
            personnel: {
              findUnique: jest.fn(),
              findFirst: jest.fn(),
              findMany: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              count: jest.fn(),
            },
            demande: {
              count: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<RhService>(RhService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createDirection', () => {
    it('should create a direction successfully', async () => {
      const createDirectionDto = {
        code_direction: 'DIR001',
        nom_direction: 'Direction Test',
        nom_directeur: 'Directeur Test',
      };

      jest.spyOn(prismaService.direction, 'findUnique').mockResolvedValue(null);
      jest.spyOn(prismaService.direction, 'create').mockResolvedValue(mockDirection as any);

      const result = await service.createDirection(createDirectionDto);

      expect(result).toEqual(mockDirection);
      expect(prismaService.direction.create).toHaveBeenCalledWith({
        data: {
          code_direction: createDirectionDto.code_direction,
          nom_direction: createDirectionDto.nom_direction,
          nom_directeur: createDirectionDto.nom_directeur,
          email_direction: undefined,
          statut: 'ACTIF',
          nb_personnel: 0,
        },
      });
    });

    it('should throw ConflictException when code already exists', async () => {
      const createDirectionDto = {
        code_direction: 'DIR001',
        nom_direction: 'Direction Test',
        nom_directeur: 'Directeur Test',
      };

      jest.spyOn(prismaService.direction, 'findUnique').mockResolvedValue(mockDirection as any);

      await expect(service.createDirection(createDirectionDto))
        .rejects.toThrow(ConflictException);
    });
  });

  describe('createService', () => {
    it('should create a service successfully', async () => {
      const createServiceDto = {
        code_service: 'SERV001',
        nom_service: 'Service Test',
        id_direction: 'dir-1',
      };

      jest.spyOn(prismaService.direction, 'findUnique').mockResolvedValue(mockDirection as any);
      jest.spyOn(prismaService.service, 'findUnique').mockResolvedValue(null);
      jest.spyOn(prismaService.service, 'create').mockResolvedValue(mockService as any);
      jest.spyOn(prismaService.direction, 'update').mockResolvedValue({} as any);

      const result = await service.createService(createServiceDto);

      expect(result).toEqual(mockService);
      expect(prismaService.service.create).toHaveBeenCalledWith({
        data: {
          code_service: createServiceDto.code_service,
          nom_service: createServiceDto.nom_service,
          id_direction: createServiceDto.id_direction,
          nb_personnel: 0,
        },
        include: { direction: true },
      });
    });

    it('should throw NotFoundException when direction does not exist', async () => {
      const createServiceDto = {
        code_service: 'SERV001',
        nom_service: 'Service Test',
        id_direction: 'invalid-dir',
      };

      jest.spyOn(prismaService.direction, 'findUnique').mockResolvedValue(null);

      await expect(service.createService(createServiceDto))
        .rejects.toThrow(NotFoundException);
    });
  });

  describe('createPersonnel', () => {
    it('should create personnel successfully', async () => {
      const createPersonnelDto = {
        nom_personnel: 'Dupont',
        prenom_personnel: 'Jean',
        email_travail: 'jean.dupont@assnat.qc.ca',
        password: 'password123',
        role_personnel: 'EMPLOYE' as const,
        type_personnel: 'PERMANENT' as const,
        id_service: 'service-1',
      };

      jest.spyOn(prismaService.service, 'findUnique').mockResolvedValue(mockService as any);
      jest.spyOn(prismaService.personnel, 'findFirst').mockResolvedValue(null);
      jest.spyOn(prismaService.personnel, 'create').mockResolvedValue(mockPersonnel as any);
      jest.spyOn(prismaService.service, 'update').mockResolvedValue({} as any);
      jest.spyOn(prismaService.direction, 'update').mockResolvedValue({} as any);

      const result = await service.createPersonnel(createPersonnelDto);

      expect(result).toEqual(mockPersonnel);
      expect(prismaService.personnel.create).toHaveBeenCalled();
    });

    it('should throw ConflictException when email already exists', async () => {
      const createPersonnelDto = {
        nom_personnel: 'Dupont',
        prenom_personnel: 'Jean',
        email_travail: 'existing@assnat.qc.ca',
        password: 'password123',
        role_personnel: 'EMPLOYE' as const,
        type_personnel: 'PERMANENT' as const,
        id_service: 'service-1',
      };

      jest.spyOn(prismaService.service, 'findUnique').mockResolvedValue(mockService as any);
      jest.spyOn(prismaService.personnel, 'findFirst').mockResolvedValue({ id_personnel: 'existing' } as any);

      await expect(service.createPersonnel(createPersonnelDto))
        .rejects.toThrow(ConflictException);
    });
  });

  describe('getStatistics', () => {
    it('should return statistics', async () => {
      const mockStats = {
        directions: 5,
        services: 15,
        personnel: 100,
        demandes: {
          total: 50,
          en_attente: 10,
          approuvees: 30,
          refusees: 10,
        },
      };

      jest.spyOn(prismaService.direction, 'count').mockResolvedValue(5);
      jest.spyOn(prismaService.service, 'count').mockResolvedValue(15);
      jest.spyOn(prismaService.personnel, 'count').mockResolvedValue(100);
      jest.spyOn(prismaService.demande, 'count')
        .mockResolvedValueOnce(50) // total
        .mockResolvedValueOnce(10) // en_attente
        .mockResolvedValueOnce(30) // approuvees
        .mockResolvedValueOnce(10); // refusees

      const result = await service.getStatistics();

      expect(result).toEqual(mockStats);
    });
  });
});
