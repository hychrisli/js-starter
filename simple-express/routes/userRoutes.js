import express from 'express';
import { createUser, findUsers, findUserById } from '../services/userService.js';
const router = express.Router();


router.post('/submit', (req, res) => {
  console.log(req.body);
  const userName = req.body.name;
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

export default router;