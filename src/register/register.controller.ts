import { Controller, Post, Body, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RegisterService } from './register.service';
import { RegisterDto } from './dto/register.dto';


@ApiTags('Inscription')
@Controller('register')
export class RegisterController {
  private readonly logger = new Logger(RegisterController.name);

  constructor(private readonly registerService: RegisterService) { }

  @Post()
  @ApiOperation({ summary: 'Inscription d\'un nouvel utilisateur' })
  @ApiResponse({
    status: 201,
    description: 'Inscription réussie',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            nom: { type: 'string' },
            prenom: { type: 'string' },
            email: { type: 'string' },
            role: { type: 'string' },
            service: { type: 'string' },
            direction: { type: 'string' },
          },
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 409, description: 'Email déjà utilisé' })
  async register(@Body() registerDto: RegisterDto) {
    this.logger.log(`Tentative d'inscription pour: ${registerDto.email}`);
    return this.registerService.register(registerDto);
  }
}