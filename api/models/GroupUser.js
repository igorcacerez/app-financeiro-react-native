const Sequelize = require('sequelize');
const db = require('./index.js');

const GroupUser = db.define('group_user', {
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
        allowNull: false,
    }
});

module.exports = GroupUser;