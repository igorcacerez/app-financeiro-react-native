const db = require('../models/index');
const Transaction = require('../models/Transactions');
const User = require('../models/Users');

// Get the transaction by id
exports.getTransactionById = async (id) => {
    createDatabase();

    const transaction = await Transaction.findOne({
        where: {
            id: id
        }
    });

    if(!transaction) throw new Error('Transaction not found');

    return transaction;
};

// Get the all transactions
exports.getTransactions = async () => {
    createDatabase();
    
    const transactions = await Transaction.findAll({
        include: [{
            model: User,
            as: 'user'
        }],
        order: [
            ['id', 'DESC'],
        ]
    })
    return transactions;
};

// Create a new transaction
exports.createTransaction = async (transaction) => {
    createDatabase();
    const newTransaction = await Transaction.create(transaction);    
    return newTransaction;
};

// Update a transaction
exports.updateTransaction = async (id, transaction) => {
    createDatabase();
    const updatedTransaction = await Transaction.update(transaction, {
        where: {
            id: id
        }
    });

    return updatedTransaction;
}

// Delete a transaction
exports.deleteTransaction = async (id) => {
    createDatabase();
    const deletedTransaction = await Transaction.destroy({
        where: {
            id: id
        }
    });

    return deletedTransaction;
}

async function createDatabase() {
    const resultado = await db.sync();
    console.log(resultado);
}