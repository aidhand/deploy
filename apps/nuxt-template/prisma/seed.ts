import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

import brands from "./data/brands";
import { bikes, bikeCategories } from "./data/bikes";
import { products, productCategories } from "./data/products"; // Import products

const prisma = new PrismaClient();

const userCount = 8;

async function createUsers(count: number) {
  const existingUsers = await prisma.user.findMany();
  const usersToCreateCount = count - existingUsers.length;

  if (usersToCreateCount <= 0) {
    return [];
  }

  const newUsers = Array.from({ length: usersToCreateCount }).map(() => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName });
    const slug = firstName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    return {
      firstName,
      lastName,
      email,
      slug,
    };
  });

  const createdUsers = await prisma.user.createManyAndReturn({
    data: newUsers,
  });

  return createdUsers;
}

async function createBrands(newBrands: typeof brands) {
  const existingBrands = await prisma.brand.findMany({
    where: {
      slug: {
        in: newBrands.map((brand) => brand.slug),
      },
    },
  });

  const existingSlugs = new Set(existingBrands.map((brand) => brand.slug));

  const brandsToCreate = newBrands.filter(
    (brand) => !existingSlugs.has(brand.slug),
  );

  const createdBrands = await prisma.$transaction(
    brandsToCreate.map((brand) => {
      return prisma.brand.create({
        data: brand,
      });
    }),
  );

  return createdBrands;
}

async function createBikes(newBikes: typeof bikes) {
  const existingBikes = await prisma.bike.findMany({
    where: {
      slug: {
        in: newBikes.map((bike) => bike.slug),
      },
    },
  });

  const existingSlugs = new Set(existingBikes.map((bike) => bike.slug));

  const bikesToCreate = newBikes.filter(
    (bike) => !existingSlugs.has(bike.slug),
  );

  const createdBikes = await prisma.$transaction(
    bikesToCreate.map((bike) => {
      return prisma.bike.create({
        data: bike,
      });
    }),
  );

  return createdBikes;
}

async function createProducts(newProducts: typeof products) {
  const existingProducts = await prisma.product.findMany({
    where: {
      slug: {
        in: newProducts.map((product) => product.slug),
      },
    },
  });

  const existingSlugs = new Set(
    existingProducts.map((product) => product.slug),
  );

  const productsToCreate = newProducts.filter(
    (product) => !existingSlugs.has(product.slug),
  );

  const createdProducts = await prisma.$transaction(
    productsToCreate.map((product) => {
      return prisma.product.create({
        data: product,
      });
    }),
  );

  return createdProducts;
}

async function main() {
  // Create users
  const createdUsers = await createUsers(userCount);
  console.log("Users created:", createdUsers.length);

  // Create brands
  const createdBrands = await createBrands(brands);
  console.log("Brands created:", createdBrands.length);

  // Create bike categories
  const createdBikeCategories = await prisma.bikeCategory.createMany({
    data: bikeCategories,
  });
  console.log("Bike categories created:", createdBikeCategories.count);

  // Create bikes
  // Don't await this, as it will be done in parallel
  createBikes(bikes).then((createdBikes) => {
    console.log("Bikes created:", createdBikes.length);
  });

  // Create product categories
  const createdProductCategories = await prisma.productCategory.createMany({
    data: productCategories,
  });
  console.log("Product categories created:", createdProductCategories.count);

  // Create products
  createProducts(products).then((createdProducts) => {
    console.log("Products created:", createdProducts.length);
  });
}

await main();
