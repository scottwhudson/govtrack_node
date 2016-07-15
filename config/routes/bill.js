'use strict';

const Bill = require('../../models/bill');
const Boom = require('boom');

module.exports = [
  { method: 'GET',
    path:'/bill',
    handler: function (request, reply) {
      Bill.find(request.url.query, function (error, data) {
        if (error || data.length === 0) {
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
    path: '/bill/{id}',
    handler: function (request, reply) {
      Bill.find(request.params, function (error, data) {
        if (error) {
          reply(Boom.notFound('missing'));
        } else {
          reply(data[0]);
        }
      });
    }
  }
];
