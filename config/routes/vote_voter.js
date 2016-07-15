'use strict';

const VoteVoter = require('../../models/vote_voter');
const Boom = require('boom');

module.exports = [
  { method: 'GET',
    path:'/vote_voter',
    handler: function (request, reply) {

      VoteVoter.find(request.url.query, function (error, data) {

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
    path: '/vote_voter/{id}',
    handler: function (request, reply) {
      VoteVoter.find(request.params, function (error, data) {
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
