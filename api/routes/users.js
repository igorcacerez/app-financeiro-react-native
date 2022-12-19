const express = require('express');
const router = express.Router();
const { 
    login,
    register,
    getUsers, 
    update, 
    deleteUser 
} = require('../controllers/users.controller');

router.get("/", getUsers);
router.post('/login', login);
router.post('/register', register);
router.post('/update/:id', update);
router.get('/delete/:id', deleteUser);

module.exports = router;