import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './shared/prisma/prisma.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ChefdeserviceModule } from './chefdeservice/chefdeservice.module';
import { RhModule } from './rh/rh.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    SharedModule,
    AuthModule,
    UserModule,
    ChefdeserviceModule,
    RhModule,
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
