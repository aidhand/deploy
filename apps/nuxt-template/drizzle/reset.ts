import * as table from "~/drizzle/schema";
import { db } from "~/server/utils/drizzle";

async function main() {
  // Delete all existing users
  await db.delete(table.users);
  console.log("Deleted all users");
}

await main();
