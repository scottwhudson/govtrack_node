var Cosponsorship = require('../../models/cosponsorship');

module.exports = [
  { method: 'GET',
    path:'/cosponsorship',
    handler: function (request, reply) {
      Cosponsorship.find(request.url.query, function (error, data) {
        if (error) {
          reply({
            statusCode: 503,
            message: 'Failed to get data',
            data: error
          });
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
      Cosponsorship.find(request.params, function (error, data) {
        if (error) {
          reply({
            statusCode: 503,
            message: 'Failed to get data',
            data: error
          });
        } else {
          reply(data[0]);
        }
      });
    }
  }
];
