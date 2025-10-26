import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Créer les types de congé
  const typeCongeAnnuel = await prisma.typeConge.upsert({
    where: { libelle_typeconge: 'Congé Annuel' },
    update: {},
    create: {
      libelle_typeconge: 'Congé Annuel',
    },
  });

  const typeCongeMaladie = await prisma.typeConge.upsert({
    where: { libelle_typeconge: 'Congé Maladie' },
    update: {},
    create: {
      libelle_typeconge: 'Congé Maladie',
    },
  });

  const typeCongeMaternite = await prisma.typeConge.upsert({
    where: { libelle_typeconge: 'Congé Maternité' },
    update: {},
    create: {
      libelle_typeconge: 'Congé Maternité',
    },
  });

  console.log('✅ Types de congé créés');

  // Créer une direction
  const direction = await prisma.direction.upsert({
    where: { code_direction: 'DIR001' },
    update: {},
    create: {
      code_direction: 'DIR001',
      nom_direction: 'Direction des Ressources Humaines',
      nom_directeur: 'Jean Dupont',
      email_direction: 'direction@assnat.qc.ca',
      nb_personnel: 0,
    },
  });

  console.log('✅ Direction créée');

  // Créer un service
  const service = await prisma.service.upsert({
    where: { code_service: 'SERV001' },
    update: {},
    create: {
      code_service: 'SERV001',
      nom_service: 'Service RH',
      id_direction: direction.id_direction,
      nb_personnel: 0,
    },
  });

  console.log('✅ Service créé');

  // Créer un admin RH
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const adminRH = await prisma.personnel.upsert({
    where: { email_travail: 'admin@assnat.qc.ca' },
    update: {},
    create: {
      nom_personnel: 'Admin',
      prenom_personnel: 'RH',
      email_travail: 'admin@assnat.qc.ca',
      password: hashedPassword,
      matricule_personnel: 'ADM001',
      role_personnel: 'RH',
      type_personnel: 'PERMANENT',
      id_service: service.id_service,
    },
  });

  // Créer un chef de service
  const chefPassword = await bcrypt.hash('chef123', 10);
  const chefService = await prisma.personnel.upsert({
    where: { email_travail: 'chef@assnat.qc.ca' },
    update: {},
    create: {
      nom_personnel: 'Chef',
      prenom_personnel: 'Service',
      email_travail: 'chef@assnat.qc.ca',
      password: chefPassword,
      matricule_personnel: 'CHEF001',
      role_personnel: 'CHEF_SERVICE',
      type_personnel: 'PERMANENT',
      id_service: service.id_service,
    },
  });

  // Créer un employé
  const employePassword = await bcrypt.hash('emp123', 10);
  const employe = await prisma.personnel.upsert({
    where: { email_travail: 'employe@assnat.qc.ca' },
    update: {},
    create: {
      nom_personnel: 'Employé',
      prenom_personnel: 'Test',
      email_travail: 'employe@assnat.qc.ca',
      password: employePassword,
      matricule_personnel: 'EMP001',
      role_personnel: 'EMPLOYE',
      type_personnel: 'PERMANENT',
      id_service: service.id_service,
    },
  });

  console.log('✅ Personnel créé');

  // Mettre à jour le nombre de personnel
  await prisma.service.update({
    where: { id_service: service.id_service },
    data: { nb_personnel: 3 },
  });

  await prisma.direction.update({
    where: { id_direction: direction.id_direction },
    data: { nb_personnel: 3 },
  });

  console.log('✅ Seed terminé avec succès!');
  console.log('📧 Comptes créés:');
  console.log('   - Admin RH: admin@assnat.qc.ca / admin123');
  console.log('   - Chef Service: chef@assnat.qc.ca / chef123');
  console.log('   - Employé: employe@assnat.qc.ca / emp123');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
