'use strict';

const Person = require('../../models/person');
const Boom = require('boom');

module.exports = [
  { method: 'GET',
    path:'/person',
    handler: function (request, reply) {
      Person.find(request.url.query, function (error, data) {
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
    path: '/person/{id}',
    handler: function (request, reply) {
      Person.find(request.params, function (error, data) {
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
