var Cosponsorship = require('../../models/cosponsorship')

module.exports = [
  { method: 'GET',
    path:'/cosponsorship',
    handler: function (request, reply) {
      Cosponsorship.find({}, function (error, data) {
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
