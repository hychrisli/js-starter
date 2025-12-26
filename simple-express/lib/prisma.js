import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({
  url: process.env["DATABASE_URL"]
});

const prisma = new PrismaClient({
  adapter,
  log: ['query', 'info', 'warn', 'error']
});

export default prisma;