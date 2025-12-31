import express from 'express';
import {
  createUser, findUsers, findUserById, deleteUserById, updateUserById,
} from '../services/userService.js';
import { validate } from '../middleware/validate.js';
import { createUserSchema } from '../schemas/userSchema.js';

const router = express.Router();

router.post('/submit', validate(createUserSchema), (req, res) => {
  console.log(req.validatedData.body);
  createUser(req.validatedData.body, res);
});

router.get('/', (req, res) => {
  findUsers(res);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const userId = Number(id);
  findUserById(userId, res);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const userId = Number(id);
  deleteUserById(userId, res);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const userId = Number(id);
  updateUserById(userId, req.body, res);
});

export default router;