var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('欢迎使用微信云托管！');
});

router.get('/hello', function (req, res, next) {
  res.json({
    hello: '你好',
  });
});

module.exports = router;
