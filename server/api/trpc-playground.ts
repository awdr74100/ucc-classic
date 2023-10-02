import { h3Handler } from 'trpc-playground/handlers/h3';
import { appRouter } from '@/server/trpc/routers';

export default defineLazyEventHandler(async () => {
  const setupHandler = await h3Handler({
    router: appRouter,
    trpcApiEndpoint: '/api/trpc',
    playgroundEndpoint: '/api/trpc-playground',
  });

  return defineEventHandler(setupHandler);
});
