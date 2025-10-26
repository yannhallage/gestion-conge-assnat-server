import { createParamDecorator, ExecutionContext, Logger } from '@nestjs/common';
import { Personnel } from '@prisma/client';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Personnel => {
    const request = ctx.switchToHttp().getRequest();
    const logger = new Logger('CurrentUser');
    
    if (!request.user) {
      logger.warn('Tentative d\'accès à CurrentUser sans authentification');
    }
    
    return request.user;
  },
);
