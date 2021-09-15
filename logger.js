/*
var url='http:mylogger.io/log';

function log(message)
{
    //Send an HTTP request
    console.log(message);
}

module.exports.log=log;
module.exports.endPoint=url;*/

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);