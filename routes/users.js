var express = require('express');
var router = express.Router();
var swagger = require('../swagger');
var connection = require('../utils/db');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.post('/create', function (req, res, next) {
  console.log('body is', req.body);
  connection.query(`insert into users set ?`, req.body, (err) => {
    if (err) {
      res.json({
        success: false,
        error: err.toString(),
      });
    } else {
      res.json({
        success: true,
        user: req.body,
      });
    }
  });
  connection.commit();
  connection.end();
});
swagger(router);
module.exports = router;
