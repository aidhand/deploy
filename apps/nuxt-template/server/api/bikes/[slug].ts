export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  const brand = await event.context.db.bike.findFirst({
    where: {
      name: {
        equals: slug,
        mode: "insensitive",
      },
    },
  });

  if (!brand) {
    throw createError({
      statusCode: 404,
      statusMessage: "Bike not found",
    });
  }

  return brand;
});
