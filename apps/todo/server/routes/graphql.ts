import { buildSchema } from "drizzle-graphql";
import { createYoga } from "graphql-yoga";

import { db } from "~/db";

export default defineEventHandler(async (event) => {
  const { schema } = buildSchema(db);
  const yoga = createYoga({ schema });

  return yoga.handle(event.node.req, event.node.res);
});
