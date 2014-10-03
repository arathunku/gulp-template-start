'use strict';

var errorMessage = 'Your request is not stubbed.';

module.exports = function(server) {
  require('./nockstures/users')(server);

  // If something is not stubbed, inform us about it
  server.all('/v3/*', function(req, res) {
    console.error(errorMessage);
    console.info(req.params);
    res.status(500).send({
      error: errorMessage,
      req: {
        body: req.body,
        params: req.params
      }
    });
  });
};
