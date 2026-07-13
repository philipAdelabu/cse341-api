import ApiService from '../services/api.service.js'
import { sendSuccess, sendError } from '../utils/responseMessage.js';

class ApiController {
  constructor() {
    //
  }

    static async getProfessional(req, res, next) { 

        try {
            const result = await ApiService.getProfessional()
             return res.json(result[0]);
        } catch (error) {
            sendError(res, error.message || 'Failed to retrieve professional', error.statusCode || 500);
            next(error);
        }
    } 
    
    static async createContact(req, res, next){
        try{
           const data = req.body;
           const result = await ApiService.createContact(data);
           sendSuccess(res, result, 'New contact created successfully')
        }catch(error){
            sendError(res, error.message || 'Failed to create new contact', error.statusCode || 500);
            next(error);
        }
    }

      static async getContact(req, res, next){
        try{
        const contactId = req.params.contactId
           const result = await ApiService.getContact(contactId);
           sendSuccess(res, result, 'The operation was successful');
        }catch(error){
            sendError(res, error.message || 'Failed to retrieve a contact', error.statusCode || 500);
            next(error);
        }
    }

      static async getAllContacts(req, res, next){
      try{
           const result = await ApiService.getContacts();
           sendSuccess(res, result, 'The operation was successful');
        }catch(error){
            sendError(res, error.message || 'Failed to retrieve a contact', error.statusCode || 500);
            next(error);
        }
    }

    static async updateContact(req, res, next){
        try{
            const contactId = req.params.contactId;
            const data = req.body;
           const result = await ApiService.updateContact(contactId, data);
           sendSuccess(res, result, 'The data successfully updated');
        }catch(error){
            sendError(res, error.message || 'Failed to update a contact', error.statusCode || 500);
            next(error);
        }
    }

    static async deleteContact(req, res, next){
        try{
            const contactId = req.params.contactId;
           const result = await ApiService.deleteContact(contactId);
           sendSuccess(res, result, 'The contact deleted successfully');
        }catch(error){
            sendError(res, error.message || 'Failed to delete a contact', error.statusCode || 500);
            next(error);
        }
    }

}

export default ApiController;