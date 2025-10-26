import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from '../shared/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;
  let jwtService: JwtService;

  const mockUser = {
    id_personnel: 'user-1',
    email_travail: 'test@assnat.qc.ca',
    password: 'hashedPassword',
    is_active: true,
    role_personnel: 'EMPLOYE',
    nom_personnel: 'Test',
    prenom_personnel: 'User',
    service: {
      nom_service: 'Service Test',
      direction: {
        nom_direction: 'Direction Test',
      },
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            personnel: {
              findUnique: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
            verifyAsync: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return user when credentials are valid', async () => {
      jest.spyOn(prismaService.personnel, 'findUnique').mockResolvedValue(mockUser as any);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as any);

      const result = await service.validateUser('test@assnat.qc.ca', 'password');

      expect(result).toEqual(mockUser);
      expect(prismaService.personnel.findUnique).toHaveBeenCalledWith({
        where: { email_travail: 'test@assnat.qc.ca' },
        include: { service: { include: { direction: true } } },
      });
    });

    it('should throw UnauthorizedException when user is not found', async () => {
      jest.spyOn(prismaService.personnel, 'findUnique').mockResolvedValue(null);

      await expect(service.validateUser('test@assnat.qc.ca', 'password'))
        .rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException when password is invalid', async () => {
      jest.spyOn(prismaService.personnel, 'findUnique').mockResolvedValue(mockUser as any);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(false as any);

      await expect(service.validateUser('test@assnat.qc.ca', 'wrongpassword'))
        .rejects.toThrow(UnauthorizedException);
    });
  });

  describe('login', () => {
    it('should return access token and user info', async () => {
      jest.spyOn(service, 'validateUser').mockResolvedValue(mockUser as any);
      jest.spyOn(jwtService, 'sign').mockReturnValue('mock-jwt-token');

      const loginDto = { email: 'test@assnat.qc.ca', password: 'password' };
      const result = await service.login(loginDto);

      expect(result).toEqual({
        access_token: 'mock-jwt-token',
        user: {
          id: mockUser.id_personnel,
          nom: mockUser.nom_personnel,
          prenom: mockUser.prenom_personnel,
          email: mockUser.email_travail,
          role: mockUser.role_personnel,
          service: mockUser.service.nom_service,
          direction: mockUser.service.direction.nom_direction,
        },
      });
    });
  });

  describe('generateTemporaryPassword', () => {
    it('should generate a password of length 8', async () => {
      const password = await service.generateTemporaryPassword();
      expect(password).toHaveLength(8);
    });

    it('should generate different passwords', async () => {
      const password1 = await service.generateTemporaryPassword();
      const password2 = await service.generateTemporaryPassword();
      expect(password1).not.toEqual(password2);
    });
  });
});
