var Bill = require('../../models/bill')

module.exports = [
  { method: 'GET',
    path:'/bill',
    handler: function (request, reply) {
      Bill.find({}, function (error, data) {
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

  // { method: 'GET',
  //   path: '/bill/{id}'
  //   handler: function (request, reply) {
  //
  //   }
  //
  // }
]
