import 'dotenv/config';
import express from 'express';
import helloRoutes from './routes/helloRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { requestIdHandler } from './middleware/requestIdHandler.js';
import { accessLogger } from './middleware/accessLogger.js';
import { initDb } from './simple-data/db.js';
import { initPrismaDb } from './repositories/userPost.js';
import { errorHandler } from './middleware/errorHandler.js';

initDb();
initPrismaDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestIdHandler);
app.use(accessLogger); // this acts on 'finish' so it can be put earlier

app.use(helloRoutes);
app.use('/users', userRoutes);

// order matters, this should be put at the end, so it can capture errors
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});