import express from 'express'
const router = express.Router({ mergeParams: true });
import ApiController from '../controllers/api.controller.js'

// Landing page route
router.get('/', (req, res) => { res.json( { name: 'cse341-api', date: Date.now()})})
// API routes

// get professional data
router.get('/professional', ApiController.getProfessional);

// post contact data
router.post('/contact', ApiController.createContact);
// get contact data detail
router.get('/contact/:contactId', ApiController.getContact);
// get all contact data
router.get('/contacts', ApiController.getAllContacts);
// update contact data
router.put('/contacts/:contactId', ApiController.updateContact);
// delete contact data
router.delete('/contacts/:contactId', ApiController.deleteContact);


export default router