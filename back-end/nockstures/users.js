'use strict';

module.exports = function(server){
  server.all('/v3/users', function(req, res){
    res.json({
      users: [
        {id: 1, username: 'username'}
      ]
    });
  });
};

