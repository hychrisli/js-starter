import prisma from '../lib/prisma.js';
import { faker } from '@faker-js/faker';

async function generateRandomData() {
  const user = await prisma.user.create({
    data: {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      posts: {
        create: {
          title: faker.word.noun(),
          content: `${faker.person.firstName()} 
          really likes ${faker.word.noun()}`,
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  });

  console.log('created user', user);

  const latestUsers = await prisma.user.findMany({
    take: 2,
    orderBy: {
      id: 'desc',
    },
    include: {
      posts: true,
    },
  });

  console.log('Latests users:', JSON.stringify(latestUsers, null, 2));
};

export function initPrismaDb() {
  generateRandomData().then(
    () => console.log('Finished initializing Prisma DB'),
  ).catch(error => console.error('Failed to init prisma DB', error));
}