import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {limiter} from './src/utils/config.js';
import {validateToken} from './src/middlewares/validateToken.js';
import {errorMiddleware} from './src/middlewares/error.js';

import {userRouter} from './src/routers/user.router.js';
import {paymentRouter} from './src/routers/payment.router.js';
import {cardRouter} from './src/routers/card.router.js';
import {authRouter} from './src/routers/auth.router.js';
import {providerRouter} from './src/routers/provider.router.js';

export const app = express();
//middlewars keys
app.use(cors({origin : '*'}))
app.use(express.json())
app.use(limiter)
app.use(morgan('dev'))
//routes public access 
app.use('/auth',authRouter)
//routes protected by token
app.use(validateToken)
app.use('/provider', providerRouter)
app.use('/user',userRouter)
app.use('/payment',paymentRouter)
app.use('/card',cardRouter)
//middlewars errors
app.use(errorMiddleware)

