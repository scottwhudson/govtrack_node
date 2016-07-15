'use strict';

const Bill = require('../../models/bill');
const Response = require('./responses');

module.exports = [
  { method: 'GET',
    path:'/bill',
    handler: function (request, reply) {
      Response.indexAction(Bill, request, reply);
    }
  },

  { method: 'GET',
    path: '/bill/{id}',
    handler: function (request, reply) {
      Response.showAction(Bill, request, reply);
    }
  }
];
