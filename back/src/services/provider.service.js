import {userModel} from '../models/user.model.js';
import {readJSON} from '../utils/utils.js';

export class ProviderService{
    //consumer_id es un identificador de la aplicacion brindada por la api
    static async getCategories(){
        const categoriesList =  readJSON('../data/categories.json') 
        if(categoriesList.length == 0) throw new Error('There are not categories in API')

        return categoriesList
    }
    static async getCompanies({categoryId}){
        const companiesList = readJSON('../data/companies.json')
        if(companiesList.length == 0) throw new Error('There are not companies in API')
        const filterCompanies = companiesList.filter(c => c.category.id == categoryId)
        if(filterCompanies.length == 0) throw new Error('There are not companies in this category')
        return filterCompanies
    }
    static async suscribedToService({serviceBody}){
        //body: userId, serviceId, clientId
        const {serviceId, clientId, userId} = serviceBody
        //get companies 
        const companiesList = readJSON('../data/companies.json')
        if(companiesList.length == 0) throw new Error('There are not companies in API')
        //get service by serviceId
        const service = companiesList.find(s => s.serviceId == serviceId)
        if(!service) throw new Error('Service no found')
        //check if client is registered with service
        const isClienteId = service.registeredUsers.some(c => c.client_Id == clientId)
        if(!isClienteId) throw new Error('Client no is registered with service') 
        //get user and check if user already has a service
        const user = await userModel.findById(userId)
        if(!user) throw new Error('User no found')
        const isService = user.userFavoriteServices.some(s => s.serviceId == serviceId)
        if(isService) return {success : true, message : 'service already is registered'}
        user.userFavoriteServices.push({serviceId})
        await user.save()
        return {success: true, message : 'suscribed success to service', user}
    }
    static async showServicesDebt({clientId,category}){
        const debtsList = readJSON('../data/debts.json')
        if(debtsList.length == 0) throw new Error('There are no debts in API')
        const filterByClient = debtsList.filter(d => d.client_id == clientId)
        if(category  != undefined) {
            const filterByService = filterByClient.filter(d => d.company.serviceId == category)
            return filterByService
        }
        if(filterByClient.length == 0) return {message: 'There are not debts pending'}
        return  filterByClient
    }  
    static async getServicesUser({id}){
        const companiesList = readJSON('../data/companies.json')
        if(companiesList.length == 0) throw new Error('There are not companies in API')
        const user = await userModel.findById(id)
        if(!user) throw new Error('User no found')
        const favoriteServices = companiesList.filter(company => 
            user.userFavoriteServices.some(service => service.serviceId === company.serviceId)
        );
        if(favoriteServices.length == 0) return {message : 'There are not services registered'}
        return favoriteServices
    }
    static async deleteServiceUser({id,serviceId}){
        const user = await userModel.findById(id)
        if(!user) throw new Error('User no found')
        user.userFavoriteServices = user.userFavoriteServices.filter( s => s.serviceId != serviceId)
        await user.save()
        return {success : true, message : 'service successfully deleted', user}
    }

}