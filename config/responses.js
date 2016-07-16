'use strict';

const Boom = require('boom');

module.exports = {

  // fetch all records for given class, with optional
  // filtering params
  //
  indexAction: function (klass, request, reply) {

    const query = request.url.query;

    klass.find(query, function (error, data) {
      if (error || data.length === 0) {
        reply(
          Boom.notFound('missing');
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
  },

  // fetch single record matching specified ID
  //
  showAction: function (klass, request, reply) {
    klass.find(request.params, function (error, data) {
      if (error) {
        reply(Boom.notFound('missing'));
      } else {
        reply(data[0]);
      }
    });
  }

};
