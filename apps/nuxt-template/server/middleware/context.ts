import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: add authentication context
declare module "h3" {
  interface H3EventContext {
    db: typeof prisma;
  }
}

export default eventHandler((event) => {
  event.context.db = prisma;
});
