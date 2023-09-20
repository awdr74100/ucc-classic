import { router } from '@/server/trpc/trpc';

import { movieRouter } from '@/server/trpc/routers/movie';
import { venueRouter } from '@/server/trpc/routers/venue';

export const appRouter = router({
  movie: movieRouter,
  venue: venueRouter,
});

export type AppRouter = typeof appRouter;
