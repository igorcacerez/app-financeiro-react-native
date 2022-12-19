const service = require('../services/transactions.service');

// Get all transactions
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await service.getTransactions();
        res.status(200).json({data: transactions});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Get a transaction by id
exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await service.getTransactionById(req.params.id);
        res.status(200).json({data: transaction});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Create a new transaction
exports.createTransaction = async (req, res) => {
    try {
        const transaction = await service.createTransaction(req.body);
        res.status(201).json({data: transaction});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Update a transaction
exports.updateTransaction = async (req, res) => {
    try {
        const id = req.params.id;

        await service.updateTransaction(id, req.body);
        const transaction = await service.getTransactionById(id);

        res.status(200).json({data: transaction});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
    try {
        const id = req.params.id;

        const transaction = await service.getTransactionById(id);
        await service.deleteTransaction(id);

        res.status(200).json({data: transaction});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

