'use strict';

const VoteVoter = require('../../models/vote_voter');
const Response = require('./responses');

module.exports = [
  { method: 'GET',
    path:'/vote_voter',
    handler: function (request, reply) {
      Response.indexAction(VoteVoter, request, reply);
    }
  },

  { method: 'GET',
    path: '/vote_voter/{id}',
    handler: function (request, reply) {
      Response.showAction(VoteVoter, request, reply);
    }
  }
];
