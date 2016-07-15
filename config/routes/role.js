'use strict';

const Role = require('../../models/role');
const Response = require('./responses');

module.exports = [
  { method: 'GET',
    path:'/role',
    handler: function (request, reply) {
      Response.indexAction(Role, request, reply);
    }
  },

  { method: 'GET',
    path: '/role/{id}',
    handler: function (request, reply) {
      Response.showAction(Role, request, reply);
    }
  }
];
