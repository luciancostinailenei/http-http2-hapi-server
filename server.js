const fs = require('fs');
const inert = require('inert');

const mountRoutes = (server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return res.file('./index.html');
        }    
    });
    
    server.route({  
        method: 'GET',
        path: '/image-chunks/{file*}',
        handler: {
          directory: { 
            path: 'image-chunks'
          }
        }
    })
};

const serverStart = async (server) => {
    try {
        await server.register(inert);

        mountRoutes(server);

        await server.start();
    } catch(err) {
        throw err;
    }

    console.log(`Server started on host ${server.settings.host} at port ${server.settings.port}`);
}

module.exports = {
    serverStart: serverStart
}