import {Router} from 'express';
import {PaymentController} from '../controllers/payment.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {paymentSchema} from '../schemas/payment.schema.js';

export const paymentRouter = Router()
paymentRouter.get('/user/:clientId',PaymentController.getPaymentsUser)
paymentRouter.get('/pay/:payId',PaymentController.getPaymentByIdUser)
paymentRouter.post('/',validateSchema(paymentSchema),PaymentController.createPaymentUser)