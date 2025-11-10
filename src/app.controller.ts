import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Application')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Point d\'entrée de l\'API' })
  @ApiResponse({ status: 200, description: 'Message de bienvenue' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  @ApiOperation({ summary: 'Vérification de l\'état de l\'API' })
  @ApiResponse({ status: 200, description: 'API opérationnelle' })
  getHealth(): object {
    return this.appService.getHealth();
  }
}
