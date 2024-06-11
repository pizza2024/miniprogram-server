var express = require('express');
var router = express.Router();
var swagger = require('../swagger');

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', function (req, res, next) {
  res.json({
    hello: 'world',
  });
});

router.get('/hello', function (req, res, next) {
  res.json({
    hello: '你好',
  });
});
swagger(router);

module.exports = router;
