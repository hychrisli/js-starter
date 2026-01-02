import express from 'express';
import {
  createUser, findUserById, deleteUserById, updateUserById,
  findUsersWithPagination,
} from '../services/userService.js';
import { validate } from '../middleware/validate.js';
import {
  createUserSchema, createUserQuerySchema,
} from '../schemas/userSchema.js';

const router = express.Router();

router.post('/submit', validate(createUserSchema), async (req, res) => {
  console.log(req.validatedData.body);
  const user = await createUser(req.validatedData.body);
  res.status(201).send(`user created ${user}`);
});

router.get('/', validate(createUserQuerySchema), async (req, res) => {
  console.log(req.validatedData.query);
  await findUsersWithPagination(req.validatedData.query, res);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const userId = Number(id);
  await findUserById(userId, res);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const userId = Number(id);
  await deleteUserById(userId, res);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const userId = Number(id);
  await updateUserById(userId, req.body, res);
});

export default router;