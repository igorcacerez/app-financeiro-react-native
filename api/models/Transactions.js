const Sequelize = require('sequelize');
const db = require('./index.js');

// Define the Transactions model
// Type is a boolean, true for income, false for expense
const Transactions = db.define('transactions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    user_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    group_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
});

module.exports = Transactions;