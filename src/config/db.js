import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let db = false;
let  uriDB 

  if(process.env.NODE_ENV === 'development'){
    uriDB = process.env.MONGODB_LOCAL_URL;
  }else{
    uriDB = process.env.MONGODB_URL;
  }

async function connectDB() {
  if(db){
    console.log('Database already connected');
    return;
  }
  try {
     await  mongoose.connect(uriDB);
     console.log('MongoDB connected successfully');
     db = true;
  } catch (err) {
    throw err;
  }
}

// Call this only when your application terminates
  async function disconnectDB() {
  try{
  if(db){
  console.log('Database shutting down..');
  await mongoose.disconnect();
  db = false;
  console.log('Database shutdown.')
  }else{
    console.log('database already closed.')
  }
}catch(error){
    throw error;
  }
}

export async function getDB(){
  try{
     await connectDB();
  }catch(error){
    throw new Error(error);
  }
}

export async function closeDB(){
   try{
    await disconnectDB();
   }catch(error){
     throw new Error(error);
   }
}
