var bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
    // configure the app to use bodyParser()
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json()); app.use(cors({
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
        origin: '*'
    }));

    // define a simple route
    app.get('/', (req, res) => {
        res.send("Hello World - API");
    });

    // Require the routes
    app.use('/users', require('./users'));
    app.use('/transactions', require('./transactions'));
    app.use('/charts', require('./charts'));
};