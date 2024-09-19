import express from 'express'
import { addCategory, getAllCategory } from '../controller/addCategoryController.js';

const router = express.Router();

router.post('/add', addCategory);
router.get('/getcategory',getAllCategory);



export default router;