import { Injectable } from '@nestjs/common';
import { CreateCableDto } from './dto/create-cable.dto';
import { UpdateCableDto } from './dto/update-cable.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CablesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCableDto: CreateCableDto) {
    return 'This action adds a new cable';
  }

  findAll() {
    return this.prisma.cable.findMany({
      include: {
        category: {
          select: { name: true },
        },
        cableStandards: {
          select: {
            standard: {
              select: {
                fullName: true,
                name: true,
                description: true,
              },
            },
          },
        },
        cableApplications: {
          select: {
            applicationName: true,
            description: true,
            isPrimary: true,
          },
        },
        cableSpecifications: {
          select: {
            specificationType: true,
            value: true,
          },
        },
        cableIndustries: {
          select: {
            industry: {
              select: {
                name: true,
                description: true,
              },
            },
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} cable`;
  }

  update(id: number, updateCableDto: UpdateCableDto) {
    return `This action updates a #${id} cable`;
  }

  remove(id: number) {
    return `This action removes a #${id} cable`;
  }
}
