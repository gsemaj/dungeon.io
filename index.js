console.log('Starting dungeon.io server...');

const config = require('config');
const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

const port = config.has('web.port') ? config.get('web.port') : 80;
http.listen(port, () => {
    console.log('Server listening on *:' + port);
});

//console.log('Server stopped successfully.');
//process.exit(0);
