const express = require('express');
const router = express.Router();
const {
    getTransactions,
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction
} = require('../controllers/transactions.controller');

router.get('/', getTransactions);
router.get('/find/:id', getTransactionById);
router.post('/create', createTransaction);
router.post('/update/:id', updateTransaction);
router.get('/delete/:id', deleteTransaction);

module.exports = router;