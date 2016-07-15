'use strict';

const Committee = require('../../models/committee');
const Response = require('./responses');

module.exports = [
  { method: 'GET',
    path:'/committee',
    handler: function (request, reply) {
      Response.indexAction(Committee, request, reply);
    }
  },

  { method: 'GET',
    path: '/committee/{id}',
    handler: function(request, reply) {
      Response.indexAction(Committee, request, reply);
    }
  }
];
