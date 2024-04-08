import express from 'express';
import { userRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';


config();
const app = express()


app.use(express.json())

app.use('/user', userRoutes)

app.use('/video', videosRoutes)

app.listen(5000)