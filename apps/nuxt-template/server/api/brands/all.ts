export default defineEventHandler(async (event) => {
  const brands = await event.context.db.brand.findMany();

  return brands;
});
