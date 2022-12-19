const db = require('../models/index');
const Group = require('../models/Group');

const createGroup = async (group) => {
    createDatabase();

    const newGroup = await Group.create(group);
    return newGroup;
};

const getGroupById = async (id) => {
    createDatabase();

    const group = await Group.findOne({
        where: {id: id}
    });

    if(!group) throw new Error('Group not found');

    return group;
};

const updateGroup = async (id, group) => {
    createDatabase();

    const updatedGroup = await Group.update(group, {
        where: {id: id}
    });

    return updatedGroup;
};

const deleteGroup = async (id) => {
    createDatabase();

    const deletedGroup = await Group.destroy({
        where: {id: id}
    });

    return deletedGroup;
};


async function createDatabase() {
    const resultado = await db.sync();
    console.log(resultado);
}
