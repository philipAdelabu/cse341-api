import  express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { getDB, closeDB } from './src/config/db.js';
import bodyParser from 'body-parser';
import router from './src/routes/index.js';




const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(router);

const port = process.env.PORT || 8080;

async function startServer(){
     await getDB();

     const server = app.listen(port, () =>{
       console.log(`Server is running on port ${port}`);
     })

     process.on("SIGINT", async () => {
         console.log('Server shutting down.. ');
         await closeDB();
         server.close(() => process.exit(0));
     })

     process.on("SIGTERM", async () => {
         console.log('Server Shutting down..');
         await closeDB();
         server.close(() => process.exit(0));
     })

}

startServer();



