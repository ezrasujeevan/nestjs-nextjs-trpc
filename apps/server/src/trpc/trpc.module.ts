import { Module } from '@nestjs/common';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { TrpcService } from '@server/trpc/trpc.service';
import { TasksModule } from '@server/tasks/tasks.module';
import { TrpcTask } from '@server/trpc/trpc.task';
import { TrpcProcedure } from '@server/trpc/trpc.procedure';

@Module({
  imports: [TasksModule],
  providers: [TrpcService, TrpcRouter, TrpcProcedure, TrpcTask],
})
export class TrpcModule {}
