const express = require('express');
const router = express.Router();

const {
    getGroups,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup
} = require('../controllers/groups.controller');

router.get('/', getGroups);
router.get('/find/:id', getGroupById);
router.post('/create', createGroup);
router.post('/update/:id', updateGroup);
router.get('/delete/:id', deleteGroup);

module.exports = router;
