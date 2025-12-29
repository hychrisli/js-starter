import express from 'express';
import {
  createUser, findUsers, findUserById, deleteUserById, updateUserById,
} from '../services/userService.js';
const router = express.Router();

router.post('/submit', (req, res) => {
  console.log(req.body);
  createUser(req.body, res);
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