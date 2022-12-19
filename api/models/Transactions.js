const Sequelize = require('sequelize');
const db = require('./index.js');
const User = require('./Users.js');

// Define the Transactions model
// Type is a boolean, true for income, false for expense
const Transactions = db.define('transactions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

// Define the relationship between the Transactions and Users models
Transactions.belongsTo(User, {foreignKey: 'user_id'});


module.exports = Transactions;