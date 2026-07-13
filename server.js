import  express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { getDB, closeDB } from './src/config/db.js';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import router from './src/routes/index.js';
import { readFile } from "fs/promises";




const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const swaggerFile  = await readFile(new URL("./swagger-output.json", import.meta.url));

// Swagger UI setup - This should be early in your middleware stack
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerFile), {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "CSE341 API Documentation"
}));    



app.use(router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', {
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl
  });
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred'
  });
});

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



