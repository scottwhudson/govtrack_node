'use strict';

const Vote = require('../../models/vote');
const Response = require('./responses');

module.exports = [
  { method: 'GET',
    path:'/vote',
    handler: function (request, reply) {
      Response.indexAction(Vote, request, reply);
    }
  },

  { method: 'GET',
    path: '/vote/{id}',
    handler: function (request, reply) {
      Response.showAction(Vote, request, reply);
    }
  }
];
