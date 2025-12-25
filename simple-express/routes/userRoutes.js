import express from 'express';
const router = express.Router();


router.post('/submit', (req, res) => {
  console.log(req.body)
  const userName = req.body.name
  res.send(`User ${userName} has been received`)
})

export default router;