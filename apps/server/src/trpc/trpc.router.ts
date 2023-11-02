import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TasksService } from '@server/tasks/tasks.service';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpc: TrpcService, private task: TasksService) {}

  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return `Hello ${input.name ? input.name : `Bilbo`}`;
      }),
  });

  createTask = this.trpc.procedure
    .input(
      z
        .object({
          title: z.string(),
          description: z.string().optional(),
          status: z.boolean().default(false).optional(),
        })
        .required(),
    )
    .mutation(async ({ input }) => {
      return await this.task.create(input);
    });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
