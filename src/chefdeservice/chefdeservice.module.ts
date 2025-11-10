import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ChefdeserviceService } from './chefdeservice.service';
import { ChefdeserviceController } from './chefdeservice.controller';
import { PrismaModule } from '../shared/prisma/prisma.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';
import { RolesGuard } from '../shared/guards/roles.guard';

@Module({
  imports: [PrismaModule, SharedModule, AuthModule],
  controllers: [ChefdeserviceController],
  providers: [
    ChefdeserviceService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [ChefdeserviceService],
})
export class ChefdeserviceModule { }
