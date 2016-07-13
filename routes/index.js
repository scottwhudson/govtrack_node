var PersonModel = require('../models/person')

module.exports = [
  { method: 'GET',
    path:'/person',
    handler: function (request, reply) {
      PersonModel.find({}, function (error, data) {
        if (error) {
            reply({
                statusCode: 503,
                message: 'Failed to get data',
                data: error
            });
        } else {
            reply({
                statusCode: 200,
                message: 'User Data Successfully Fetched',
                data: data
            });
        }
      });
    }
  },

  {
    method: 'GET',
    path: '/bill',
    handler: function (request, reply) {
        return reply('bar');
    }
  }
]
