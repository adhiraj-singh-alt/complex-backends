import { PrismaClient } from '@prisma/client';
import { seedCategories } from './seeders/category.seeder';
import { seedStandards } from './seeders/standard.seeder';
import { seedIndustries } from './seeders/industry.seeder';
import { seedCables } from './seeders/cable.seeder';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('🌱 Starting database seeding...');

  // Seed lookup data first (required by cables)
  await seedCategories(prisma);
  await seedStandards(prisma);
  await seedIndustries(prisma);

  // Seed cables with their specifications and relations
  await seedCables(prisma);

  console.log('✅ Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
