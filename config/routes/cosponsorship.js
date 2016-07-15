'use strict';

const Cosponsorship = require('../../models/cosponsorship');
const Response = require('./responses')

module.exports = [
  { method: 'GET',
    path:'/cosponsorship',
    handler: function (request, reply) {
      Response.indexAction(Cosponsorship, request, reply);
    }
  },

  { method: 'GET',
    path: '/cosponsorship/{id}',
    handler: function (request, reply) {
      Response.showAction(Cosponsorship, request, reply);
    }
  }
];
