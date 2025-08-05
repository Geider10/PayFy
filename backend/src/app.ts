import express from 'express';
import {userRouter} from './router/user.route';

const app = express();
app.use(express.json());
app.use('/api/user',userRouter);

export default app;