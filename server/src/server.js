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