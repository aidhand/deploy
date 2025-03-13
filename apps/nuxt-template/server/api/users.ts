export default defineEventHandler(async (event) => {
  const users = await event.context.db.user.findMany();

  return users;
});
