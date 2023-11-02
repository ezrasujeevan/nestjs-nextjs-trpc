import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {TasksModule} from "@server/tasks/tasks.module";

@Module({
  providers: [PrismaService],
  exports:[PrismaService]
})
export class PrismaModule {}
