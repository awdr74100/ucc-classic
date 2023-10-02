import { test, expect } from 'vitest';
import { appRouter } from './server/trpc/routers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

test('ttt', async () => {
  // expect(1 + 1).toBe(3);
  const caller = appRouter.createCaller({ prisma });

  const result = await caller.auth.login({ email: 'aaa@gmail.com', password: '123456789' });

  expect(result).toStrictEqual({ success: true });
});
