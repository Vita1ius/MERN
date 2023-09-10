import express from 'express';
import { config } from 'dotenv';
import router from './route/route.js';
import { PrismaClient } from '@prisma/client'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
config();
const port = process.env.PORT || 5000;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Дозволяє запити з будь-якого джерела
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/',async (req, res) => {
  try {
      res.json('Hello dude')
  } catch (error) {
      res.json(error)
  }
})
app.use(router)

app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`)
})