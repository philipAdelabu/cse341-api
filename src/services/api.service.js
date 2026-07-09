import { getDB, disconnectDB} from '../config/db.js'

class ApiService {
     constructor(){

     }

     static async createProfile(data = {}){
            if(!data){
                console.log("The data is empty");
                return null;
            }
           try{
            const db = await getDB();
            const result = await db.inserts.contacts(data);
            return result;
           }catch(error){
            throw error;
           }finally{
            await disconnectDB();
           }
    
       }
    
    
    static async getUsers(){
          
    }
    
}

export default ApiService;