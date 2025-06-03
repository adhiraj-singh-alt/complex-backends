import { PrismaClient } from '@prisma/client';

const sampleCategories = [
  {
    name: 'Power Cables',
    description: 'High and low voltage power transmission cables',
    displayOrder: 1,
  },
  {
    name: 'Control Cables',
    description: 'Multi-core cables for control and instrumentation',
    displayOrder: 2,
  },
  {
    name: 'Instrumentation Cables',
    description: 'Shielded cables for signal transmission',
    displayOrder: 3,
  },
  {
    name: 'Special Purpose Cables',
    description: 'Fire resistant and specialized application cables',
    displayOrder: 4,
  },
];

export async function seedCategories(prisma: PrismaClient): Promise<void> {
  console.log('Seeding categories...');

  for (const category of sampleCategories) {
    await prisma.cableCategory.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    });
  }

  console.log('Categories seeded.');
}
