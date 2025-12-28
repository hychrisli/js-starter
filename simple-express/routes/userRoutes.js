import express from 'express';
import { createUser } from '../services/userService.js';
const router = express.Router();


router.post('/submit', (req, res) => {
  console.log(req.body);
  const userName = req.body.name;
  createUser(req.body, res);
});

export default router;