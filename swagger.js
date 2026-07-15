import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
dotenv.config();

const doc = {
 
  openapi: "3.0.0",

  info: {
    title: "API Documentation",
    description: "CSE341 API Documentation",
  },

  servers: [
    {
      url: process.env.NODE_ENV === "development"
        ? process.env.SWAGGER_HOST_LOCAL
        : process.env.SWAGGER_HOST
    }
  ],

  components: {
    schemas: {
      ContactCreate: {
        type: "object",
        properties: {
          firstName: { type: "string", example: "Steven" },
          lastName: { type: "string", example: "Tom" },
          email: { type: "string", format: "email", example: "tom@gmail.com" },
          favoriteColor: { type: "string", example: "red" },
          birthday: { type: "string", format: "date", example: "1990-02-10" }
        },
        required: ["firstName", "lastName", "email"]
      },
      ContactUpdate: {
        type: "object",
        properties: {
          firstName: { type: "string", example: "Steven" },
          lastName: { type: "string", example: "Tom" },
          email: { type: "string", format: "email", example: "tom@gmail.com" },
          favoriteColor: { type: "string", example: "blue" },
          birthday: { type: "string", format: "date", example: "1990-02-10" }
        }
      }
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
