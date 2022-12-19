const service = require('../services/groups.service');

exports.createGroup = async (req, res) => {
    try {
        const { name } = req.body;
        const group = await service.createGroup({name});

        res.status(201).json({data: group});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
};

exports.getGroupById = async (req, res) => {
    try {
        const id = req.params.id;
        const group = await service.getGroupById(id);

        res.status(200).json({data: group});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
}

exports.getGroups = async (req, res) => {
    try {
        const groups = await service.getGroups();
        res.status(200).json({data: groups});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
}

exports.updateGroup = async (req, res) => {
    try {
        const id = req.params.id;
        const group = req.body;

        await service.updateGroup(id, group);
        const updatedGroup = await service.getGroupById(id);

        res.status(200).json({data: updatedGroup});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
}

exports.deleteGroup = async (req, res) => {
    try {
        const id = req.params.id;

        const group = await service.getGroupById(id);
        await service.deleteGroup(id);

        res.status(204).json({data: group});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
}
