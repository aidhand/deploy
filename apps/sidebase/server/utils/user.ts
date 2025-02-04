// CRUD operations for user

export async function createUser(options: { name: string; email: string }) {
  // Create a new user
  const user = await prisma.user.create({
    data: {
      email: options.email,
    },
  });

  return user;
}

export async function readUser() {}

export async function updateUser() {}

export async function deleteUser() {}
