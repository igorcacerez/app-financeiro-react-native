const http = require('http');
const app = require('./app');
// require("./config/migrate"); // Descomente para criar todos as tabelas do banco

const port = 8888 || 3000;
const server = http.createServer(app);

console.log(`started api on port ${port}`);

server.listen(port);