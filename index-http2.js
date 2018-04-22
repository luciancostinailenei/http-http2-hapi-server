const hapi = require('hapi');
const http2 = require('http2');
const fs = require('fs');
const inert = require('inert');
const path = require('path');

const serverStart = require('./server').serverStart;

const options = {
        key: fs.readFileSync('./ssl-crt/server.key'),
        cert:  fs.readFileSync('./ssl-crt/server.crt')    
};

const serverSetup = new hapi.server({
    listener: http2.createSecureServer(options),
    host: 'localhost',
    port: 3000,
    tls: true,
    routes: {
        files: {
            relativeTo: path.join(__dirname, '')
        }
    }
});

serverStart(serverSetup);
