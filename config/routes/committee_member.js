'use strict';

const CommitteeMember = require('../../models/committee_member');
const Response = require('./responses');

module.exports = [
  { method: 'GET',
    path:'/committee_member',
    handler: function (request, reply) {
      Response.indexAction(CommitteeMember, request, reply);
    }
  },

  { method: 'GET',
    path: '/committee_member/{id}',
    handler: function(request, reply) {
      Response.showAction(CommitteeMember, request, reply);
    }
  }
];
