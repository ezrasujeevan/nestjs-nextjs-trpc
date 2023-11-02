import { Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { z } from 'zod';

@Injectable()
export class TrpcProcedure {
  constructor(private readonly trpc: TrpcService) {}

  hello = this.trpc.procedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return `Hello ${input.name ? input.name : `Bilbo`}`;
    });
}
