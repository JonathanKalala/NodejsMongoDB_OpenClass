const http = require('http');
const App = require('./App');

App.set('port', process.env.PORT || 3000)

const server = http.createServer(App);

server.listen(process.env.PORT || 3000);