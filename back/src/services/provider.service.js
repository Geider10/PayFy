import { userModel } from '../data/models/user.model.js';
import {categories} from '../data/mocks/categories.js';
import {services} from '../data/mocks/services.js';
import {invoices} from '../data/mocks/invoices.js';    

export class ProviderService {
    static async getCategories() {
        const categoriesList = categories
        if (categoriesList.length === 0) throw new Error('There are not categories in API');
        return categoriesList;
    }

    static async getCompanies({ categoryId }) {
        const companiesList = services
        if (companiesList.length === 0) throw new Error('There are not companies in API');
        const filterCompanies = companiesList.filter(c => c.category.id == categoryId);
        if (filterCompanies.length === 0) throw new Error('There are not companies in this category');
        return filterCompanies;
    }

    static async addServiceUser({ serviceBody }) {
        const { serviceId, clientId, userId } = serviceBody; //body: userId, serviceId, clientId
        //get companies 
        const companiesList = services
        if (companiesList.length === 0) throw new Error('There are not companies in API');
        //get service by serviceId
        const service = companiesList.find(s => s.serviceId == serviceId);
        if (!service) throw new Error('Service no found');
        //check if service has registered at user
        const isClienteId = service.registeredUsers.some(c => c.client_Id == clientId);
        if (!isClienteId) throw new Error('no reconoce dicho número');
        //get user and check if user already has added the service
        const user = await userModel.findById(userId);
        if (!user) throw new Error('User no found');
        const isService = user.userFavoriteServices.some(s => s.serviceId == serviceId);
        if (isService) throw new Error('ya esta agregado');
        user.userFavoriteServices.push({ serviceId, clientId });
        await user.save();
        return { success: true, message: 'suscribed success to service', user };
    }

    static async getDebtsUser({ clientId, serviceId}) {
        const debtsList = invoices
        if (debtsList.length === 0) throw new Error('There are no invoices in API');
        const user = await userModel.findById(clientId).lean();
        if (!user) throw new Error('User no found');
        //get invoices ID if services already is registered
        let debtsByService = debtsList.filter(debt =>
            user.userFavoriteServices.some(service => service.clientId == debt.client_id)
        );
        console.log(debtsByService);
        //filter invoices by query params
        if (serviceId !== undefined) {
            const filterByCategory = debtsByService.filter(d => d.company.serviceId == serviceId);
            return filterByCategory;
        }
        if (debtsByService.length === 0) return { message: 'There are not invoices pending' };
        return debtsByService;
    }

    static async getServicesUser({ id }) {
        const companiesList = services
        if (companiesList.length === 0) throw new Error('There are not companies in API');
        const user = await userModel.findById(id);
        if (!user) throw new Error('User no found');
        const favoriteServices = companiesList.filter(company =>
            user.userFavoriteServices.some(service => service.serviceId === company.serviceId)
        );
        if (favoriteServices.length === 0) return { message: 'There are not services registered' };
        return favoriteServices;
    }

    static async deleteServiceUser({ id, serviceId }) {
        const user = await userModel.findById(id);
        if (!user) throw new Error('User no found');
        user.userFavoriteServices = user.userFavoriteServices.filter(s => s.serviceId != serviceId);
        await user.save();
        return { success: true, message: 'service successfully deleted', user };
    }
}