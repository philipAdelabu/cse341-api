import { MongoClient, ServerApiVersion } from 'mongodb';

var db;

export async function connectDB() {
  if(db){
    console.log('Database already connected');
    return db;
  }

  try {
    db = new MongoClient(process.env.MONGODB_URL, {
  serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
    await db.connect();
    const dataB = db.db('adebisiphilip_db');
    console.log("You successfully connected to MongoDB!");
    return dataB;
  } catch (err) {
    console.dir(err);
    throw err;
  }
}

// Call this only when your application terminates
 export async function disconnectDB() {
  if(db){
  console.log('Database shutting down.');
  await db.close();
  }else{
    throw new Error('Database is not connected');
  }
}

export async function getDB(){
  try{
   if(!db){
     db = await connectDB();
    return db;
   }
   return db;
  }catch(error){
    throw new Error(error);
  }
}
