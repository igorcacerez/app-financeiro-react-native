const express = require('express');
const router = express.Router();

const {
    getChartsToMonth
} = require('../controllers/charts.controller');

router.get('/months', getChartsToMonth);

module.exports = router;