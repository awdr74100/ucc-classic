import type { inferAsyncReturnType } from '@trpc/server';
import { PrismaClient } from '@prisma/client';

let _prisma: PrismaClient;

export const createContext = () => {
  if (!_prisma) {
    _prisma = new PrismaClient();
  }

  return {
    prisma: _prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
