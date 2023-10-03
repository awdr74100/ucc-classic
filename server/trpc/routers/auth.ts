import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const authRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6).max(14),
      }),
    )
    .mutation(({ input, ctx }) => {
      return { input, ctx };
    }),
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6).max(14),
      }),
    )
    .mutation(({ input, ctx }) => {
      return { input, ctx };
    }),
});
