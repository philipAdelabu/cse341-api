import { version } from 'os';
import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
dotenv.config();


const doc = {
 info: {
   title: 'API Documentation',
   version: '2.0.0',
   description: 'CSE341 API Documentation'
 },
 host: `${process.env.NODE_ENV === 'development' ? process.env.SWAGGER_HOST_LOCAL : process.env.SWAGGER_HOST}`,
 schemes: ['https']
};



const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];



swaggerAutogen()(outputFile, endpointsFiles, doc);