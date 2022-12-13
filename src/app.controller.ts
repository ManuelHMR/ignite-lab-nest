import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany({});
  }
  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        content: 'New friend invite',
        category: 'social',
        recipientId: 1,
      },
    });
  }
}
