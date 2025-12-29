import prisma from '../lib/prisma.js';

export async function asyncSaveUser(userReq) {
  const user = await prisma.user.create({
    data: {
      name: userReq.name,
      email: userReq.email,
    }
  });
  console.log(`created user`, user);
};

export async function asyncFindUsers() {
  const users = await prisma.user.findMany();
  // console.log(`found users`, users);
  return users;
}

export async function asyncFindUserById(id) {
  return await prisma.user.findUnique({
    where: {
      id: id
    }
  });
}