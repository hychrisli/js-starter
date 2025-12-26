import 'dotenv/config';
import express from 'express';
import helloRoutes from './routes/helloRoutes.js';
import userRoutes from './routes/userRoutes.js';
import requestLogger from './middleware/requestLogger.js';
import responseLogger from './middleware/responseLogger.js';
import { initDb } from './simple-data/db.js';
import { initPrismaDb } from './repositories/userPost.js';

initDb();
initPrismaDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(responseLogger);

app.use(helloRoutes);
app.use('/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});