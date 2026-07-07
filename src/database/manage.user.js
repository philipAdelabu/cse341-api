import { connectToMongoDB, disconnectFromMongoDB } from '../config/db';


class ManageUser {

   static async createUser(data = {}){

       try{
       const db = await connectToMongoDB();
        const result = await db.inserts.contacts(data);
       }catch(error){
        throw error;
       }finally{
        await disconnectFromMongoDB();
       }

   }


static async getUsers(){
      
}



}