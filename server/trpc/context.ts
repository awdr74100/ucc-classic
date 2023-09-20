import type { inferAsyncReturnType } from '@trpc/server';
import type { H3Event } from 'h3';
import { PrismaClient } from '@prisma/client';

let _prismaClient: PrismaClient;

export const createContext = async (event: H3Event) => {
  if (!_prismaClient) {
    _prismaClient = new PrismaClient();
  }

  return {
    prisma: _prismaClient,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
