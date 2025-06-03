import { PrismaClient } from '@prisma/client';

const sampleStandards = [
  {
    name: 'IS 1554',
    fullName: 'IS 1554 - PVC Insulated Cables',
    description: 'Indian Standard for PVC insulated cables up to 1100V',
  },
  {
    name: 'IS 7098',
    fullName: 'IS 7098 - XLPE Insulated Cables',
    description: 'Indian Standard for XLPE insulated cables for voltages up to 33kV',
  },
  {
    name: 'IEC 60502',
    fullName: 'IEC 60502 - Power Cables with Extruded Insulation',
    description: 'International standard for power cables with extruded insulation',
  },
  {
    name: 'IS 13567',
    fullName: 'IS 13567 - Polyethylene Insulated Jelly Filled Cables',
    description: 'Indian Standard for PE insulated jelly filled telephone cables',
  },
];

export async function seedStandards(prisma: PrismaClient): Promise<void> {
  console.log('Seeding standards...');

  for (const standard of sampleStandards) {
    await prisma.standard.upsert({
      where: { name: standard.name },
      update: {},
      create: standard,
    });
  }

  console.log('Standards seeded.');
}
