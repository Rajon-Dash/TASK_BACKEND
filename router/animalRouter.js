import express from 'express'
import { addAnimal, getAllAnimal } from '../controller/addAnimalController.js';

const router = express.Router();

router.post('/addanimal', addAnimal)
router.get('/getanimal',getAllAnimal);

export default router;