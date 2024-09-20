import express from 'express'
import { addAnimal, getAllAnimal } from '../controller/addAnimalController.js';

const router = express.Router();

router.post('/add', addAnimal)
router.get('/get',getAllAnimal);

export default router;