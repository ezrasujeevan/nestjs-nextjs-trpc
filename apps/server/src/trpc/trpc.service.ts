import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';
import {createProcedure} from "@trpc/server/dist/deprecated/internals/procedure";
import {z} from "zod";

@Injectable()
export class TrpcService {
  trpc = initTRPC.create();
  procedure = this.trpc.procedure;
  router = this.trpc.router;
  mergeRouters = this.trpc.mergeRouters;


}
