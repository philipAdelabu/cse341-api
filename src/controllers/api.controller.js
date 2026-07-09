import { contacts } from '../database/contacts.js'
import ApiService from '../services/api.service.js'

class ApiController {
  constructor() {
    //
  }

    static async getProfessional(req, res, next) { 

        try {
            const result = await ApiService.getProfessional()
            return await res.json(result);
        } catch (error) {
            next(error);
        }
    } 
    
    static async createProfile(req, res, next){
        try{
           const data = req.body;
           const result = await ApiService.createProfile(data);
           return await res.json(result);
        }catch(error){
            next(error);
        }
    }

      static async getProfile(req, res, next){
        try{
           
        }catch(error){
            next(error);
        }
    }
}

export default ApiController;