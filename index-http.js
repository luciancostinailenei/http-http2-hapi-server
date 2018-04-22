const hapi = require('hapi');
const http = require('http');
const path = require('path');

const serverStart = require('./server').serverStart;

const serverSetup = new hapi.server({
    listener: http.createServer(),
    host: 'localhost',
    port: 4000,
    routes: {
        files: {
            relativeTo: path.join(__dirname, '')
        }
    }
});

serverStart(serverSetup);
