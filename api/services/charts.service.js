const db = require('../models/index');

exports.getChartsToMonth = async () => {
    const [results, metadata] = await db.query(
        `SELECT STRFTIME("%m", DATE) AS month, STRFTIME("%Y", DATE) AS year, SUM(amount) AS total FROM transactions GROUP BY month, year`
    )

    return results;
}