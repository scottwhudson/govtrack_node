var VoteVoter = require('../../models/vote_voter')

module.exports = [
  { method: 'GET',
    path:'/vote_voter',
    handler: function (request, reply) {
      VoteVoter.find({}, function (error, data) {
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
