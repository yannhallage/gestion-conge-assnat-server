import { Module } from '@nestjs/common';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { RhService } from './rh.service';
import { RhController } from './rh.controller';
import { PrismaModule } from '../shared/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';
import { RolesGuard } from '../shared/guards/roles.guard';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [RhController],
  providers: [
    RhService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [RhService],
})
export class RhModule { }
