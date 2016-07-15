'use strict';

const Person = require('../../models/person');
const Response = require('./responses');

module.exports = [
  { method: 'GET',
    path:'/person',
    handler: function (request, reply) {
      Response.indexAction(Person, request, reply);
    }
  },

  { method: 'GET',
    path: '/person/{id}',
    handler: function (request, reply) {
      Response.showAction(Person, request, reply);
    }
  }
];
