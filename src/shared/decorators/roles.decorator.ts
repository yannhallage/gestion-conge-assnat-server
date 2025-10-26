import { SetMetadata } from '@nestjs/common';
import { RolePersonnel } from '@prisma/client';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RolePersonnel[]) => SetMetadata(ROLES_KEY, roles);
