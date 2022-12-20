const express = require('express');
const router = express.Router();

const {
    getChartsToMonth,
    getChartsToCategory
} = require('../controllers/charts.controller');

router.get('/months', getChartsToMonth);
router.get('/categories', getChartsToCategory);

module.exports = router;