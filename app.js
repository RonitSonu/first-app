//console.log(module);
/*
var logger = require('./logger');

logger.log('message');

*/

/*

const os = require('os');

var totalMemory = os.totalmem();

var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);

console.log(`Free Memory: ${freeMemory}`);

*/

/*

const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);

*/

/*
const fs = require('fs');

fs.readdir('./', function(err,files)
{
    if(err) console.log('Error',err);
    else console.log('Result',files);
});
*/

/*
const http = require('http');

const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New Connection...');
});

server.listen(3000);

console.log('Listening on port 3000');

*/

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');