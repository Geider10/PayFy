import {ProviderService} from '../services/provider.service.js';

export class ProviderController{
    static async getCategories(req,res,next){
        try {
            const categories = await ProviderService.getCategories()
            res.status(200).json(categories)    
        } catch (error) {
            next(error)
        }
    }
    static async getCompanies(req,res,next){
        try {
            const {categoryId} = req.params
            const companies = await ProviderService.getCompanies({categoryId})
            res.status(200).json(companies)
        } catch (error) {
            next(error) 
        }
    }
    static async suscribedToService(req,res,next){
        try {
            const serviceBody = req.body
            const service = await ProviderService.suscribedToService({serviceBody})
            res.status(201).json(service)
        } catch (error) {
            next(error)
        }
    }
    static async showServicesDebt(req,res,next){
        try {
            const {clientId} = req.body
            const {category} = req.query
            console.log(clientId,category);
            const debts = await ProviderService.showServicesDebt({clientId,category})
            res.status(200).json(debts)
        } catch (error) {
            next(error)
        }
    }
    static async getServicesUser(req,res,next){
        try {
            const {id} = req.params
            const services = await ProviderService.getServicesUser({id})
            res.status(200).json(services)
        } catch (error) {
            next(error)
        }
    }
    static async deleteServiceUser(req,res,next){
        try {
            const {id,serviceId} = req.params
            const user = await ProviderService.deleteServiceUser({id,serviceId})
            return res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
}