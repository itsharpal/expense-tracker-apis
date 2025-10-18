import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { addExpense, deleteExpense, getExpense, updateExpense } from '../controllers/expense.controller.js';

const router = express.Router();

router.route('/addNew').post(isAuthenticated, addExpense);
router.route('/update/:id').post(isAuthenticated, updateExpense);
router.route('/delete/:id').post(isAuthenticated, deleteExpense);
router.route('/get').get(isAuthenticated, getExpense);

export default router;