var CommitteeMember = require('../../models/committee_member');

module.exports = [
  { method: 'GET',
    path:'/committee_member',
    handler: function (request, reply) {
      CommitteeMember.find(request.url.query, function (error, data) {
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
    path: '/committee_member/{id}',
    handler: function(request, reply) {
      CommitteeMember.find(request.params, function(error, data) {
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
