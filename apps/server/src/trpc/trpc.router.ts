import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcProcedure } from '@server/trpc/trpc.procedure';
import { TrpcTask } from '@server/trpc/trpc.task';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private trpcProcedure: TrpcProcedure,
    private trpcTask: TrpcTask,
  ) {}

  router = this.trpc.router({
    hello: this.trpcProcedure.hello,
  });

  appRouter = this.trpc.mergeRouters(this.router, this.trpcTask.taskRouter);

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
