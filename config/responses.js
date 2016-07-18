'use strict';

const Boom = require('boom');

// Default number of records returned if no limit is specified
const API_LIMIT = 100;

module.exports = {

  // fetch all records for given class, with optional
  // filtering params
  //
  indexAction: function (klass, request, reply) {
    queryDatastore(klass, request, reply, API_LIMIT);
  },

  // fetch single record matching specified ID
  //
  showAction: function (klass, request, reply) {
    queryDatastore(klass, request, reply, 1);
  }
};

const queryDatastore = function (klass, request, reply, limit) {

  var params = request.url.query;
  var fields = '';
  var order_by = '';
  var queryLimit = limit;

  if (Object.keys(params).length > 0) {
    if (Object.prototype.hasOwnProperty.call(params, 'fields')) {
      fields = params.fields.replace(',', ' ');
      delete params.fields;
    }

    if (Object.prototype.hasOwnProperty.call(params, 'order_by')) {
      order_by = params.order_by;
      delete params.order_by;
    }

    if (Object.prototype.hasOwnProperty.call(params, 'limit')) {
      queryLimit = parseInt(params.limit);
      delete params.limit;
    }
  }

  klass.
    find(params).
    limit(queryLimit).
    sort(order_by).
    select(fields).
    exec(function (error, data) {
      console.log('QUERY LOG');
      console.log('class');
      console.log(klass);
      console.log('params');
      console.log(params);
      console.log('fields');
      console.log(fields);
      console.log('limit');
      console.log(queryLimit);
      console.log('records retrieved');
      console.log(data.length);
      console.log('error');
      console.log(error);

      if (data.length === 0) {
        reply(Boom.notFound('missing'));
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

};
