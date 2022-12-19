const db = require('../models/index');
const Users = require('../models/Users');

// Get the user by id
exports.getUserById = async (id) => {
    const resultado = await db.sync();
    console.log(resultado);
    
    const user = await Users.findOne({
        where: {
            id: id
        }
    });

    if(!user) throw new Error('User not found');

    return user;
};

exports.getUserByEmailAndPassword = async (email, pass) => {
    const resultado = await db.sync();
    console.log(resultado);

    const user = await Users.findOne({
        where: {
            email: email,
            password: pass
        }
    });

    if(!user) throw new Error('User not found');

    return user;
};

exports.getUsers = async () => {
    const users = await Users.findAll();
    return users;
};

exports.createUser = async (user) => {
    const newUser = await Users.create(user);
    return newUser;
};

exports.updateUser = async (id, user) => {
    const updatedUser = await Users.update(user, {
        where: {
            id: id
        }
    });

    return updatedUser;
};

exports.deleteUser = async (id) => {
    const deletedUser = await Users.destroy({
        where: {
            id: id
        }
    });

    return deletedUser;
};