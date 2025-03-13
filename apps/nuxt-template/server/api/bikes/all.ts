export default defineEventHandler(async (event) => {
  const bikes = await event.context.db.bike.findMany({
    include: {
      brand: true,
    },
  });

  return bikes;
});
