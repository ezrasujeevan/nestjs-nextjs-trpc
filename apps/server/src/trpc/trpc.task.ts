import { Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TasksService } from '@server/tasks/tasks.service';
import { z } from 'zod';

@Injectable()
export class TrpcTask {
  create = this.trpc.procedure
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

  findAlL = this.trpc.procedure.query(async () => {
    return await this.task.findAll();
  });

  findCompleted = this.trpc.procedure.query(async () => {
    return await this.task.findCompleted();
  });

  findIncomplete = this.trpc.procedure.query(async () => {
    return await this.task.findIncomplete();
  });
  findOne = this.trpc.procedure.input(z.number()).query(async ({ input }) => {
    return await this.task.findOne(input);
  });

  update = this.trpc.procedure
    .input(
      z.object({
        id: z.number(),
        data: z.object({
          title: z.string(),
          description: z.string().optional(),
          status: z.boolean().default(false).optional(),
        }),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, data } = input;
      return await this.task.update(id, data);
    });
  remove = this.trpc.procedure.input(z.number()).mutation(async ({ input }) => {
    return await this.task.remove(input);
  });

  taskRouter = this.trpc.router({
    create: this.create,
    findAll: this.findAlL,
    fineCompleted: this.findCompleted,
    fineIncomplete: this.findIncomplete,
    findOne: this.findOne,
    update: this.update,
    delete: this.remove,
  });

  constructor(private readonly trpc: TrpcService, private task: TasksService) {}
}
