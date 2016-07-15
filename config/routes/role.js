'use strict';

const Role = require('../../models/role');
const Boom = require('boom');

module.exports = [
  { method: 'GET',
    path:'/role',
    handler: function (request, reply) {
      Role.find({}, function (error, data) {
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
    path: '/role/{id}',
    handler: function (request, reply) {
      Role.find(request.params, function (error, data) {
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
