const service = require('../services/charts.service');

exports.getChartsToMonth = async (req, res) => {
    try {
        const charts = await service.getChartsToMonth();
        res.status(200).json({data: charts});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
    }
}
