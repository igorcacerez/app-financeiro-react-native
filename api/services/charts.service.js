const db = require('../models/index');

exports.getChartsToMonth = async () => {
    const [results, metadata] = await db.query(
        `SELECT STRFTIME("%m", DATE) AS month, STRFTIME("%Y", DATE) AS year, SUM(amount) AS total FROM transactions WHERE type = 1 GROUP BY month, year`
    )

    return results;
}

exports.getChartsToCategory = async () => {
    const [results, metadata] = await db.query(
        `SELECT category, SUM(amount) AS total FROM transactions WHERE type = 0 GROUP BY category`
    )

    return results;
}