var Role = require('../../models/role');

module.exports = [
  { method: 'GET',
    path:'/role',
    handler: function (request, reply) {
      Role.find({}, function (error, data) {
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
    path: '/role/{id}',
    handler: function (request, reply) {
      Role.find(request.params, function (error, data) {
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
