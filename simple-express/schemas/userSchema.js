import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'name should have at least 1 char'),
    email: z.email('Invalid email format'),
  }),
});