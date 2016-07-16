'use strict';

const Response = require('./responses');
const Bill = require('../models/bill');
const CommitteeMember = require('../models/committee_member');
const Committee = require('../models/committee');
const Cosponsorship = require('../models/cosponsorship');
const Person = require('../models/person');
const Role = require('../models/role');
const VoteVoter = require('../models/vote_voter');
const Vote = require('../models/vote');

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
  },

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
  },

  { method: 'GET',
    path:'/committee',
    handler: function (request, reply) {
      Response.indexAction(Committee, request, reply);
    }
  },

  { method: 'GET',
    path: '/committee/{id}',
    handler: function(request, reply) {
      Response.showAction(Committee, request, reply);
    }
  },

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
  },

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
  },

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
  },

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
  },

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
]
