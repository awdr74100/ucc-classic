import { z } from 'zod';
// import { publicProcedure, router } from '@/server/trpc/trpc';
import { publicProcedure, router } from '../trpc';
import { hash, verify } from 'argon2';

export const authRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8).max(16),
      }),
    )
    .mutation(async ({ input: { email, password }, ctx: { prisma } }) => {
      const hashedPassword = await hash(password);

      await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          roles: {
            create: [
              {
                assignedBy: 'auto',
                role: {
                  connectOrCreate: {
                    where: {
                      name: 'admin',
                    },
                    create: {
                      name: 'admin',
                    },
                  },
                },
              },
            ],
          },
        },
      });

      return { success: true };
    }),
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8).max(16),
      }),
    )
    .mutation(async ({ input: { email, password }, ctx: { prisma } }) => {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        include: {
          roles: {
            include: {
              role: true,
            },
          },
        },
      });

      console.log(user?.roles);

      if (!user) return { success: false };

      if (!(await verify(user.password, password))) return { success: false };

      return { success: true };
    }),
});
