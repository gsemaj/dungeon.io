console.log('Starting dungeon.io server...');

const config = require('config');
const express = require('express');
const app = express();
const http = require('http').createServer(app);

// Serve client index page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

// Serve static client resources, redirecting root directory to client directory
app.use(express.static('client'));

// Load config fields
const port = config.has('web.port') ? config.get('web.port') : 80;

http.listen(port, () => {
    console.log('Server listening on *:' + port);
});

//console.log('Server stopped successfully.');
//process.exit(0);
