import * as table from "~/drizzle/schema";
import { db } from "~/server/utils/drizzle";
import { faker } from "@faker-js/faker";

const userCount = 10;

async function main() {
  const users = Array.from({ length: userCount }).map(() => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      firstName,
      lastName,
      email: faker.internet.email({ firstName, lastName }),
    };
  });

  await db.insert(table.users).values(users);
  console.log(`Seeded ${userCount} users`);
}

await main();
