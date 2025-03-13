export default defineEventHandler(async (event) => {
  const queries = getQuery(event);

  // Check if the query has a brand filter
  const brand = queries.brand ? String(queries.brand) : null;

  // Check if the query has a category filter
  const category = queries.category ? String(queries.category) : null;

  // Check if the query has a result limit
  const limit = queries.limit ? Number(queries.limit) : null;

  // Check if the query has a page filter
  const page = queries.page ? Number(queries.page) : null;

  // Check if the query has a sort filter
  const sortBy = queries.sortBy ? String(queries.sortBy) : null;
  const sortOrder = queries.sortOrder ? String(queries.sortOrder) : null;
  const sort = sortBy && sortOrder ? { [sortBy]: sortOrder } : null;

  const bikes = await event.context.db.bike.findMany({
    include: {
      brand: true,
    },
    where: {
      ...(brand && { brandSlug: brand }),
      ...(category && { categorySlug: category }),
    },
    take: limit || 10, // Default to 10 results if no limit is provided
    skip: page ? (page - 1) * (limit || 10) : 0, // Calculate the offset for pagination
    orderBy: sort || { createdAt: "desc" }, // Show latest bikes first
  });

  return bikes;
});
