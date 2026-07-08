import express from 'express'

const router = express.Router({ mergeParams: true });


router.get('/professional', (req, res, next) =>{
     res.send('Hello world from here.. ');
});


export default router