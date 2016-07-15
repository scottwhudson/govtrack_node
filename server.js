'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./config/routes');

server.connection({
    host: 'localhost',
    port: 8000
});

server.route(routes);

// database config
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/govtrack');

// server start
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
