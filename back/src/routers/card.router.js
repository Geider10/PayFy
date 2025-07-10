import {Router} from 'express';
import {CardController} from '../controllers/card.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {cardValidator} from '../validators/card.validator.js';

export const cardRouter = Router()
cardRouter.get('/',CardController.getPaymentMethods)
cardRouter.get('/:id',CardController.getPaymentMethodById)
cardRouter.post('/',validateSchema(cardValidator) ,CardController.createPaymentMethod)
cardRouter.put('/:id',validateSchema(cardValidator), CardController.updatePaymentMethod)
cardRouter.delete('/:id',CardController.deletePaymentMethod)
