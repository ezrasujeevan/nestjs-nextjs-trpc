import { Module } from '@nestjs/common';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { TrpcService } from '@server/trpc/trpc.service';
import {TasksModule} from "@server/tasks/tasks.module";

@Module({
  imports: [TasksModule],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
