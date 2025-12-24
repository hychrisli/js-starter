import 'dotenv/config'
import express from 'express'
const app = express()
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Welcome to simple express!")
})

app.post('/user', (req, res) => {
  console.log(req.body)
  const userName = req.body.name
  res.send(`User ${userName} has been received`)
})

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`)
})