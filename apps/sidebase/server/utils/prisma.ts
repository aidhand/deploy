import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
const prismaGlobal = globalThis as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}
