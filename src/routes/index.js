import express from 'express'
const router = express.Router({ mergeParams: true });
import { body,  param, query, validationResult } from 'express-validator';
import ApiController from '../controllers/api.controller.js'

// Landing page route
router.get('/', (req, res) => { res.json( { name: 'cse341-api', date: Date.now()})})
// API routes

// get professional data
router.get('/professional', ApiController.getProfessional);

 
router.post('/contact',
      /*
    #swagger.summary = 'Create a new user'
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/ContactCreate" }
        }
      }
    }
  */
    [
  body('firstName').notEmpty().withMessage('Name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('favoriteColor').notEmpty().withMessage('Favorite color is required'),
  body('birthday').isDate().withMessage('Valid date is required')
],ApiController.createContact);

// get contact data detail  
router.get('/contact/:contactId', [
    param('contactId').isMongoId().withMessage('Valid contact ID is required')
], ApiController.getContact);

// get all contact data
router.get('/contacts', ApiController.getAllContacts);

 
router.put('/contacts/:contactId', [
    param('contactId').isMongoId().withMessage('Valid contact ID is required'),
    body('firstName').optional().notEmpty().withMessage('Name is required'),
    body('lastName').optional().notEmpty().withMessage('Last name is required'),
    body('favoriteColor').optional().notEmpty().withMessage('Favorite color is required'),
    body('birthday').optional().isDate().withMessage('Valid date is required')
],

 /*
    #swagger.summary = 'Update an existing user'
  
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/ContactUpdate" }
        }
      }
    }
  */

ApiController.updateContact);

// delete contact data
router.delete('/contacts/:contactId', [
    param('contactId').isMongoId().withMessage('Valid contact ID is required')
], ApiController.deleteContact);


export default router