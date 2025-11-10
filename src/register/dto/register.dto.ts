import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty({
        description: 'Nom du personnel',
        example: 'Dupont',
    })
    @IsString({ message: 'Le nom doit être une chaîne de caractères' })
    @IsNotEmpty({ message: 'Le nom est requis' })
    nom: string;

    @ApiProperty({
        description: 'Prénom du personnel',
        example: 'Jean',
    })
    @IsString({ message: 'Le prénom doit être une chaîne de caractères' })
    @IsNotEmpty({ message: 'Le prénom est requis' })
    prenom: string;

    @ApiProperty({
        description: 'Email de travail',
        example: 'jean.dupont@assnat.qc.ca',
    })
    @IsEmail({}, { message: 'Format d\'email invalide' })
    @IsNotEmpty({ message: 'L\'email est requis' })
    email: string;

    @ApiProperty({
        description: 'Mot de passe',
        example: 'motdepasse123',
        minLength: 6,
    })
    @IsString({ message: 'Le mot de passe doit être une chaîne de caractères' })
    @IsNotEmpty({ message: 'Le mot de passe est requis' })
    @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
    password: string;

    @ApiProperty({
        description: 'ID du service',
        example: 'uuid-du-service',
    })
    @IsString({ message: 'L\'ID du service doit être une chaîne de caractères' })
    @IsNotEmpty({ message: 'L\'ID du service est requis' })
    id_service: string;

    @ApiProperty({
        description: 'Rôle du personnel',
        example: 'EMPLOYE',
        enum: ['ADMIN', 'RH', 'CHEF_SERVICE', 'EMPLOYE'],
        required: false,
    })
    @IsOptional()
    @IsEnum(['ADMIN', 'RH', 'CHEF_SERVICE', 'EMPLOYE'], { message: 'Le rôle doit être ADMIN, RH, CHEF_SERVICE ou EMPLOYE' })
    role?: string;

    @ApiProperty({
        description: 'Type de personnel',
        example: 'PERMANENT',
        enum: ['PERMANENT', 'CONTRACTUEL', 'STAGIAIRE'],
        required: false,
    })
    @IsOptional()
    @IsEnum(['PERMANENT', 'CONTRACTUEL', 'STAGIAIRE'], { message: 'Le type doit être PERMANENT, CONTRACTUEL ou STAGIAIRE' })
    type?: string;

    @ApiProperty({
        description: 'Matricule du personnel',
        example: 'EMP001',
        required: false,
    })
    @IsOptional()
    @IsString({ message: 'Le matricule doit être une chaîne de caractères' })
    matricule?: string;

    @ApiProperty({
        description: 'Téléphone de travail',
        example: '418-123-4567',
        required: false,
    })
    @IsOptional()
    @IsString({ message: 'Le téléphone doit être une chaîne de caractères' })
    telephone_travail?: string;
}