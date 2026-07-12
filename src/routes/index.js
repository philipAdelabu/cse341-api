import express from 'express'
const router = express.Router({ mergeParams: true });
import ApiController from '../controllers/api.controller.js'

router.get('/', (req, res) => { res.json( { name: 'cse341-api', date: Date.now()})})
router.get('/professional', ApiController.getProfessional);
router.post('/contact', ApiController.createContact);
router.get('/contact/:contactId', ApiController.getContact);
router.get('/contacts', ApiController.getAllContacts);

export default router