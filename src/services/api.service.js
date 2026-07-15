import Contact from '../models/contact.js';
import { readFile } from "fs/promises";


class ApiService {
     constructor(){

     }

     static async getProfessional(){
        try{
        const data = await readFile(new URL("../database/user.json", import.meta.url));
        const users = JSON.parse(data);
        return users;
        }catch(error){
            throw error;
        }
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
            const result = await Contact.findOne({_id: contactId});
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

    static async updateContact(contactId, data){
        try{
            const result = await Contact.findOneAndUpdate({_id: contactId}, data, {new: true});
            return result;
           }catch(error){
            throw error; 
           } 
    }

    static async deleteContact(contactId){
        try{
            const result = await Contact.findOneAndDelete({_id: contactId});
            if(!result){
                throw new Error("Contact not found");
            }
            return result;
           }catch(error){
            throw error;
           } 
    }       
    
}

export default ApiService;