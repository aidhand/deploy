export default defineEventHandler(async (event) => {
  const users = await event.context.db.select().from(table.users);

  return users;
});
