import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API Gestion des Congés - Assemblée Nationale du Québec - Version 1.0';
  }

  getHealth(): object {
    return {
      status: 'OK',
      message: 'API opérationnelle',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    };
  }
}
