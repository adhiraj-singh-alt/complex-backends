// Sample Electric Cable Data Examples
// This file shows realistic data for electric cables using the Prisma schema

// 1. SAMPLE LOOKUP DATA

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

// 2. SAMPLE CABLE EXAMPLES

const sampleCables = [
  {
    // Example 1: High Voltage Power Cable
    name: '11kV XLPE Insulated Power Cable',
    modelNumber: 'XLPE-11KV-3C-185',
    categoryId: 1, // Power Cables
    description:
      'Three core XLPE insulated, PVC sheathed power cable suitable for underground installation in power distribution networks. Features copper conductor with excellent electrical and thermal properties.',
    shortDescription: '11kV three core XLPE power cable with copper conductor for underground distribution',

    // Core specifications
    voltageRating: '11 kV',
    conductorMaterial: 'Copper',
    conductorSize: '185 mm²',
    insulationMaterial: 'XLPE (Cross-linked Polyethylene)',
    sheathMaterial: 'PVC (Polyvinyl Chloride)',

    // Physical properties
    overallDiameterMm: 67.5,
    weightPerKmKg: 4850.0,
    minBendingRadiusMm: 540,

    // Operating conditions
    operatingTempMin: -10,
    operatingTempMax: 90,
    installationTempMin: 0,
    installationTempMax: 50,

    // Construction details
    numberOfCores: 3,
    coreArrangement: 'Circular',
    armoringType: 'Galvanized Steel Wire Armored (SWA)',
    isFlameRetardant: true,
    isFireResistant: false,

    // Images (sample S3 URLs)
    productImageUrl: 'https://your-bucket.s3.amazonaws.com/cables/xlpe-11kv-product.jpg',
    crossSectionImageUrl: 'https://your-bucket.s3.amazonaws.com/cables/xlpe-11kv-cross-section.jpg',

    // SEO
    slug: '11kv-xlpe-power-cable-185mm',
    metaTitle: '11kV XLPE Power Cable 185mm² - High Voltage Distribution',
    metaDescription:
      'Premium 11kV XLPE insulated power cable with copper conductor. Ideal for underground power distribution networks.',
    isFeatured: true,
    displayOrder: 1,

    // Related data
    standards: ['IS 7098', 'IEC 60502'],
    industries: ['Power Generation & Distribution', 'Infrastructure & Construction'],
    applications: [
      {
        applicationName: 'Underground Power Distribution',
        description: 'Primary distribution networks in urban areas',
        isPrimary: true,
      },
      {
        applicationName: 'Industrial Power Supply',
        description: 'Medium voltage supply to industrial facilities',
        isPrimary: false,
      },
    ],
  },

  {
    // Example 2: Control Cable
    name: 'Multi-Core PVC Control Cable',
    modelNumber: 'CTRL-PVC-16C-1.5',
    categoryId: 2, // Control Cables
    description:
      'Sixteen core PVC insulated and sheathed control cable designed for control and automation systems. Features tinned copper conductors for enhanced corrosion resistance.',
    shortDescription: '16 core PVC control cable for industrial automation and control systems',

    // Core specifications
    voltageRating: '1.1 kV',
    conductorMaterial: 'Tinned Copper',
    conductorSize: '1.5 mm²',
    insulationMaterial: 'PVC (Polyvinyl Chloride)',
    sheathMaterial: 'PVC (Polyvinyl Chloride)',

    // Physical properties
    overallDiameterMm: 18.2,
    weightPerKmKg: 285.0,
    minBendingRadiusMm: 145,

    // Operating conditions
    operatingTempMin: -15,
    operatingTempMax: 70,
    installationTempMin: -5,
    installationTempMax: 60,

    // Construction details
    numberOfCores: 16,
    coreArrangement: 'Concentric',
    armoringType: 'None',
    isFlameRetardant: true,
    isFireResistant: false,

    // Images
    productImageUrl: 'https://your-bucket.s3.amazonaws.com/cables/control-16c-product.jpg',
    crossSectionImageUrl: 'https://your-bucket.s3.amazonaws.com/cables/control-16c-cross-section.jpg',

    // SEO
    slug: '16-core-pvc-control-cable-1-5mm',
    metaTitle: '16 Core PVC Control Cable 1.5mm² - Industrial Automation',
    metaDescription: 'Reliable 16 core PVC control cable for industrial control systems and automation applications.',
    isFeatured: false,
    displayOrder: 2,

    // Related data
    standards: ['IS 1554'],
    industries: ['Manufacturing', 'Oil & Gas'],
    applications: [
      {
        applicationName: 'Industrial Control Systems',
        description: 'Motor control and automation panels',
        isPrimary: true,
      },
      {
        applicationName: 'Building Management Systems',
        description: 'HVAC and lighting control',
        isPrimary: false,
      },
    ],
  },

  {
    // Example 3: Instrumentation Cable
    name: 'Shielded Instrumentation Cable',
    modelNumber: 'INST-PE-2P-1.5-SH',
    categoryId: 3, // Instrumentation Cables
    description:
      'Two pair individually shielded instrumentation cable with polyethylene insulation. Designed for reliable signal transmission in industrial environments with excellent EMI protection.',
    shortDescription: '2 pair shielded instrumentation cable for signal transmission in industrial applications',

    // Core specifications
    voltageRating: '300/500 V',
    conductorMaterial: 'Copper',
    conductorSize: '1.5 mm²',
    insulationMaterial: 'PE (Polyethylene)',
    sheathMaterial: 'PVC (Polyvinyl Chloride)',

    // Physical properties
    overallDiameterMm: 12.8,
    weightPerKmKg: 165.0,
    minBendingRadiusMm: 102,

    // Operating conditions
    operatingTempMin: -20,
    operatingTempMax: 80,
    installationTempMin: -10,
    installationTempMax: 50,

    // Construction details
    numberOfCores: 4, // 2 pairs
    coreArrangement: 'Twisted Pairs',
    armoringType: 'Aluminum Foil Shield + Tinned Copper Drain Wire',
    isFlameRetardant: true,
    isFireResistant: false,

    // Images
    productImageUrl: 'https://your-bucket.s3.amazonaws.com/cables/inst-shielded-product.jpg',
    crossSectionImageUrl: 'https://your-bucket.s3.amazonaws.com/cables/inst-shielded-cross-section.jpg',

    // SEO
    slug: '2-pair-shielded-instrumentation-cable-1-5mm',
    metaTitle: '2 Pair Shielded Instrumentation Cable - Signal Transmission',
    metaDescription:
      'High-quality shielded instrumentation cable for reliable signal transmission in industrial environments.',
    isFeatured: false,
    displayOrder: 3,

    // Related data
    standards: ['IS 13567'],
    industries: ['Oil & Gas', 'Steel & Metal Industries'],
    applications: [
      {
        applicationName: 'Process Control',
        description: 'Temperature and pressure monitoring systems',
        isPrimary: true,
      },
      {
        applicationName: 'Data Acquisition',
        description: 'Industrial measurement and monitoring',
        isPrimary: true,
      },
    ],
  },

  {
    // Example 4: Fire Resistant Cable
    name: 'Fire Resistant MICC Cable',
    modelNumber: 'MICC-FR-3C-4.0',
    categoryId: 4, // Special Purpose Cables
    description:
      'Three core mineral insulated copper clad (MICC) fire resistant cable. Maintains circuit integrity during fire conditions, essential for emergency systems and critical installations.',
    shortDescription: 'Fire resistant MICC cable for emergency systems and critical applications',

    // Core specifications
    voltageRating: '750 V',
    conductorMaterial: 'Copper',
    conductorSize: '4.0 mm²',
    insulationMaterial: 'Magnesium Oxide (MgO)',
    sheathMaterial: 'Copper',

    // Physical properties
    overallDiameterMm: 11.2,
    weightPerKmKg: 1890.0,
    minBendingRadiusMm: 112,

    // Operating conditions
    operatingTempMin: -40,
    operatingTempMax: 250,
    installationTempMin: -20,
    installationTempMax: 70,

    // Construction details
    numberOfCores: 3,
    coreArrangement: 'Circular',
    armoringType: 'None (Inherent Fire Resistance)',
    isFlameRetardant: true,
    isFireResistant: true,

    // Images
    productImageUrl: 'https://your-bucket.s3.amazonaws.com/cables/micc-fr-product.jpg',
    crossSectionImageUrl: 'https://your-bucket.s3.amazonaws.com/cables/micc-fr-cross-section.jpg',

    // SEO
    slug: 'fire-resistant-micc-cable-4mm',
    metaTitle: 'Fire Resistant MICC Cable 4mm² - Emergency Systems',
    metaDescription:
      'Premium fire resistant MICC cable maintaining circuit integrity during fire. Ideal for emergency and safety systems.',
    isFeatured: true,
    displayOrder: 1,

    // Related data
    standards: ['IS 1554'],
    industries: ['Infrastructure & Construction', 'Oil & Gas'],
    applications: [
      {
        applicationName: 'Emergency Lighting',
        description: 'Fire exit and emergency lighting circuits',
        isPrimary: true,
      },
      {
        applicationName: 'Fire Alarm Systems',
        description: 'Smoke detection and fire alarm circuits',
        isPrimary: true,
      },
      {
        applicationName: 'Emergency Power',
        description: 'Critical equipment power supply',
        isPrimary: false,
      },
    ],
  },
];

// 3. SAMPLE ADDITIONAL SPECIFICATIONS

const sampleSpecificationTypes = [
  {
    name: 'Current Carrying Capacity',
    dataType: 'number',
    unit: 'A',
    category: 'electrical',
  },
  {
    name: 'Short Circuit Current',
    dataType: 'number',
    unit: 'kA',
    category: 'electrical',
  },
  {
    name: 'Tensile Strength',
    dataType: 'number',
    unit: 'N/mm²',
    category: 'mechanical',
  },
  {
    name: 'Flame Propagation Index',
    dataType: 'number',
    unit: 'mm/min',
    category: 'environmental',
  },
];

const sampleCableSpecifications = [
  // For 11kV XLPE Cable
  {
    cableId: 1,
    specificationTypeId: 1, // Current Carrying Capacity
    value: '340',
  },
  {
    cableId: 1,
    specificationTypeId: 2, // Short Circuit Current
    value: '8.5',
  },
  {
    cableId: 1,
    specificationTypeId: 3, // Tensile Strength
    value: '12.5',
  },
];

// 4. SAMPLE QUOTE REQUEST

const sampleQuoteRequest = {
  cableId: 1, // 11kV XLPE Cable
  customerName: 'Rajesh Kumar',
  customerEmail: 'rajesh@powertech.in',
  customerPhone: '+91 98765 43210',
  companyName: 'PowerTech Engineering Pvt Ltd',
  quantityRequired: 5000, // meters
  lengthRequiredMeters: 5000,
  projectDetails:
    'Underground power distribution for new industrial complex in Chennai. Required for 11kV feeder installation.',
  deliveryLocation: 'Chennai, Tamil Nadu',
  expectedDeliveryDate: new Date('2025-08-15'),
  additionalRequirements:
    'Need installation guidance and technical support. Cables should be tested as per IS 7098 standards.',
  status: 'pending',
};

// 5. PRISMA SEED DATA EXAMPLE

export const seedData = {
  categories: sampleCategories,
  standards: sampleStandards,
  industries: sampleIndustries,
  cables: sampleCables,
  specificationTypes: sampleSpecificationTypes,
  cableSpecifications: sampleCableSpecifications,
  quoteRequest: sampleQuoteRequest,
};

// 6. COMPLETE PRISMA SEED FUNCTION

async function seedDatabase() {
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();

  try {
    // Create Categories
    for (const category of sampleCategories) {
      await prisma.cableCategory.create({ data: category });
    }

    // Create Standards
    for (const standard of sampleStandards) {
      await prisma.standard.create({ data: standard });
    }

    // Create Industries
    for (const industry of sampleIndustries) {
      await prisma.industry.create({ data: industry });
    }

    // Create Specification Types
    for (const specType of sampleSpecificationTypes) {
      await prisma.specificationType.create({ data: specType });
    }

    // Create Cables (without relations first)
    for (const cable of sampleCables) {
      const { standards, industries, applications, ...cableData } = cable;

      const createdCable = await prisma.cable.create({
        data: cableData,
      });

      // Create Cable-Standard relations
      for (const standardName of standards) {
        const standard = await prisma.standard.findUnique({
          where: { name: standardName },
        });
        if (standard) {
          await prisma.cableStandard.create({
            data: {
              cableId: createdCable.id,
              standardId: standard.id,
            },
          });
        }
      }

      // Create Cable-Industry relations
      for (const industryName of industries) {
        const industry = await prisma.industry.findUnique({
          where: { name: industryName },
        });
        if (industry) {
          await prisma.cableIndustry.create({
            data: {
              cableId: createdCable.id,
              industryId: industry.id,
            },
          });
        }
      }

      // Create Applications
      for (const application of applications) {
        await prisma.cableApplication.create({
          data: {
            cableId: createdCable.id,
            ...application,
          },
        });
      }
    }

    // Create Cable Specifications
    for (const spec of sampleCableSpecifications) {
      await prisma.cableSpecification.create({ data: spec });
    }

    // Create Sample Quote Request
    await prisma.quoteRequest.create({ data: sampleQuoteRequest });

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Usage: npx prisma db seed
