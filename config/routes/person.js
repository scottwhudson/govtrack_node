var Person = require('../../models/person')

module.exports = [
  { method: 'GET',
    path:'/person',
    handler: function (request, reply) {
      Person.find({}, function (error, data) {
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
