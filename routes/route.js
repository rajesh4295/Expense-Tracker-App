var router = require('express').Router();
var path = require('path');
var expenseController = require('../controller/expense.controller');

router.get('/test', expenseController.test);
router.post('/add-expense', expenseController.saveExpense);
router.get('/get-all-expense', expenseController.getAllExpense);
router.get('/get-expense/:id', expenseController.getExpense);
router.put('/update-expense/:id', expenseController.updateExpense);
router.delete('/delete-expense/:id', expenseController.deleteExpense);
// router.get('*', (req,res)=> res.redirect('/static/dashboard'));
module.exports = router;