import  express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './src/routes/index.js';

dotenv.config();


const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(router);

const port = process.env.PORT || 8080;


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})