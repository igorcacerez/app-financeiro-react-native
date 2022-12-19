const service = require('../services/users.service');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body; 
        const user = await service.getUserByEmailAndPassword(email, password);
        
        // If user is found, return 200 and user data
        res.status(200).json({data: user});

    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
};

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await service.createUser({name, email, password});

        // If user is created, return 201 and user data
        res.status(201).json({data: user});

    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await service.getUsers();
        res.status(200).json({data: users});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await service.getUserById(id);
        await service.deleteUser(id);

        res.status(200).json({data: user});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        await service.updateUser(id, {name, email, password});
        const user = await service.getUserById(id);

        res.status(200).json({data: user});

    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
};


