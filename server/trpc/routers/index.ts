import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
  user: publicProcedure.input(z.object({ id: z.number().gt(0) })).query(async ({ input }) => {
    const { id } = input;

    const user = { id, name: 'Ian' };

    return user;
  }),
});

export type AppRouter = typeof appRouter;
