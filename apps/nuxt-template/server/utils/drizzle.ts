import { drizzle } from "drizzle-orm/neon-http";

export const db = drizzle(process.env.DATABASE_URL!);
export * as table from "~/drizzle/schema";
