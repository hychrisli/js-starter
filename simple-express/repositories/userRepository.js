import prisma from '../lib/prisma.js';

export async function asyncSaveUser(userReq) {
  const user = await prisma.user.create({
    data: {
      name: userReq.name,
      email: userReq.email,
    },
  });
  console.log('created user', user);
};

export async function asyncUserCount() {
  return await prisma.user.count();
}

export async function asyncFindUsers(page, limit) {
  const users = await prisma.user.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      id: 'asc',
    },
  });
  // console.log(`found users`, users);
  return users;
}

export async function asyncFindUserById(id) {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
}

export async function asyncDeleteUserById(id) {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
}

export async function asyncUpdateUserById(id, data) {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
}