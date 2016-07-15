'use strict';

const CommitteeMember = require('../../models/committee_member');
const Boom = require('boom');

module.exports = [
  { method: 'GET',
    path:'/committee_member',
    handler: function (request, reply) {
      CommitteeMember.find(request.url.query, function (error, data) {
        if (error) {
          reply(
            Boom.notFound('missing')
          );
        } else {
          reply({
            meta: {
              limit: data.length,
              offset: 0,
              total_count: data.length
            },
            objects: data
          });
        }
      });
    }
  },

  { method: 'GET',
    path: '/committee_member/{id}',
    handler: function(request, reply) {
      CommitteeMember.find(request.params, function(error, data) {
        if (error) {
          reply(
            Boom.notFound('missing')
          );
        } else {
          reply(data[0]);
        }
      });
    }
  }
];
