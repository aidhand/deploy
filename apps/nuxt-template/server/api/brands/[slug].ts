export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");

  const brand = await event.context.db.brand.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });

  if (!brand) {
    throw createError({
      statusCode: 404,
      statusMessage: "Brand not found",
    });
  }

  return brand;
});
