import {Router} from 'express';
import {PaymentController} from '../controllers/payment.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {paymentValidator} from '../validators/payment.validator.js';

export const paymentRouter = Router()
paymentRouter.get('/user/:clientId',PaymentController.getPaymentsUser)
paymentRouter.get('/user/:clientId/pay/:payId',PaymentController.getPaymentByIdUser)
paymentRouter.post('/',validateSchema(paymentValidator),PaymentController.createPaymentUser)