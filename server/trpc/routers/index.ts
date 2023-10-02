// import { router } from '@/server/trpc/trpc';

// import { authRouter } from '@/server/trpc/routers/auth';
import { router } from '../trpc';
import { authRouter } from '../routers/auth';

export const appRouter = router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
