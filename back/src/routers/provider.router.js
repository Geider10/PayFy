import {ProviderController} from '../controllers/provider.controller.js'; 
import {Router} from 'express';

export const providerRouter = Router()
providerRouter.get('/categories', ProviderController.getCategories)
providerRouter.get('/companies/:categoryId', ProviderController.getCompanies)
providerRouter.post('/services', ProviderController.addServiceUser)
providerRouter.post('/debts', ProviderController.getDebtsUser)
providerRouter.get('/services/:id', ProviderController.getServicesUser)
providerRouter.delete('/services/:id/service/:serviceId', ProviderController.deleteServiceUser)