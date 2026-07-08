import { MongoClient } from 'mongodb';

var db;

async function connectDB() {
  if(db){
    console.log('Database already connected');
    return db;
  }

  try {
    db = new MongoClient(process.env.MONGODB_URL);
    await db.connect();
    console.log("You successfully connected to MongoDB!");
    return db;
  } catch (err) {
    console.dir(err);
    throw err;
  }
}

// Call this only when your application terminates
 async function disconnectDB() {
  if(db){
  console.log('Database shutting down.');
  await db.close();
  }else{
    throw new Error('Database is not connected');
  }

}

module.exports = {
     connectDB,
     disconnectDB,
};