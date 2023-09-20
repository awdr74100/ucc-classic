import { z } from 'zod';
import { publicProcedure, router } from '@/server/trpc/trpc';

export const venueRouter = router({
  createOne: publicProcedure.input(z.object({})).mutation(({ input, ctx }) => {
    return {};
  }),
  findOne: publicProcedure.input(z.object({})).query(({ input, ctx }) => {
    return {};
  }),
  updateOne: publicProcedure.input(z.object({})).mutation(({ input, ctx }) => {
    return {};
  }),
  deleteOne: publicProcedure.input(z.object({})).mutation(({ input, ctx }) => {
    return {};
  }),
});
