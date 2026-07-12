import Contact from '../models/contact.js';

class ApiService {
     constructor(){

     }

     static async createContact(data = {}){
            if(!data){
                console.log("The data is empty");
                return null;
            }
           try{
            
            const result = await Contact.create(data);
            return result;
           }catch(error){
            throw error;
           }
    
       }
    
    
    static async getContact(contactId){
          try{
            const result = await Contact.findOne({id: contactId});
            return result;
           }catch(error){
            throw error;
           } 
    }

     static async getContacts(){
          try{
            const result = await Contact.find();
            return result;
           }catch(error){
            throw error;
           }   
    }
    
}

export default ApiService;