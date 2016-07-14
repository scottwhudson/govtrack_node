var Person = require('../../models/person');

module.exports = [
  { method: 'GET',
    path:'/person',
    handler: function (request, reply) {
      Person.find(request.url.query, function (error, data) {
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
    path: '/person/{id}',
    handler: function (request, reply) {
      Person.find(request.params, function (error, data) {
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
