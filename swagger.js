import { version } from 'os';
import swaggerAutogen from 'swagger-autogen';


const doc = {
 info: {
   title: 'API Documentation',
   version: '2.0.0',
   description: 'CSE341 API Documentation'
 },
 host: 'cse341-api-7rz2.onrender.com:8080',
 schemes: ['https', 'http'],
 consumes: ['application/json'],
 produces: ['application/json'],
};


const options = {
  autoHeaders: true,
  autoQuery: true,
  autoBody: true,
  autoQuery: true
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];



swaggerAutogen()(outputFile, endpointsFiles, doc, options);