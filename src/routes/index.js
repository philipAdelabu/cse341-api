import express from 'express'
const router = express.Router({ mergeParams: true });
import ApiController from '../controllers/api.controller.js'


router.get('/professional', ApiController.getProfessional);
router.post('/profile', ApiController.createProfile);

export default router