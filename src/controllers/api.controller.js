

class ApiController {
  constructor() {
    //
  }

    static async getProfessional(req, res, next) { 

        try {
            // Your logic for fetching professional data
        } catch (error) {
            next(error);
        }
    } 
    
    static async createProfile(req, res, next){
        try{
           
        }catch(error){
            next(error);
        }
    }
}