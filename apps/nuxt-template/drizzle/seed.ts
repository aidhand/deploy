import * as t from "~/drizzle/schema";
import { db } from "~/server/utils/drizzle";

async function main() {
  await db.insert(t.users).values({
    email: "jim@example.com",
    firstName: "Jim",
  });
  console.log("New user created!");

  const users = await db.select().from(t.users);
  console.log("Getting all users from the database: ", users);
}

await main();
