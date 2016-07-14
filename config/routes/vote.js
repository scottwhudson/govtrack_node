var Vote = require('../../models/vote')

module.exports = [
  { method: 'GET',
    path:'/vote',
    handler: function (request, reply) {
      PersonModel.find(request.url.query, function (error, data) {
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
  }
]