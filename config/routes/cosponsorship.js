'use strict';

const Cosponsorship = require('../../models/cosponsorship');
const Boom = require('boom');

module.exports = [
  { method: 'GET',
    path:'/cosponsorship',
    handler: function (request, reply) {
      Cosponsorship.find(request.url.query, function (error, data) {
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
    path: '/cosponsorship/{id}',
    handler: function (request, reply) {
      Cosponsorship.findOne(request.params, function (error, data) {
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
