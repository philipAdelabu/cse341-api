import express from 'express';
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})