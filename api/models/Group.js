const Sequelize = require('sequelize');
const db = require('./index.js');

const Group = db.define('group', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Group;