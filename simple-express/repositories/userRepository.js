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