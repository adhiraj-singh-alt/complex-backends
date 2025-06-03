import { PrismaClient } from '@prisma/client';

const sampleIndustries = [
  {
    name: 'Power Generation & Distribution',
    description: 'Electrical utilities, substations, and power plants',
  },
  {
    name: 'Oil & Gas',
    description: 'Refineries, petrochemical plants, and offshore platforms',
  },
  {
    name: 'Steel & Metal Industries',
    description: 'Steel plants, aluminum smelters, and metal processing',
  },
  {
    name: 'Infrastructure & Construction',
    description: 'Buildings, bridges, tunnels, and urban infrastructure',
  },
  {
    name: 'Manufacturing',
    description: 'Industrial automation and manufacturing facilities',
  },
];

export async function seedIndustries(prisma: PrismaClient): Promise<void> {
  console.log('Seeding industries...');

  for (const industry of sampleIndustries) {
    await prisma.industry.upsert({
      where: { name: industry.name },
      update: {},
      create: industry,
    });
  }

  console.log('Industries seeded.');
}
