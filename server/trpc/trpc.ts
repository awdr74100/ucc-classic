import { initTRPC } from '@trpc/server';
import type { Context } from '@/server/trpc/context';
import { ZodError } from 'zod';

const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      },
    };
  },
});

export const publicProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;
