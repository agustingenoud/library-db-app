var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* TEST Coolness */
router.get('/cool/', function(req, res, next) {
  res.send('You are sou KULG and the ganggg');
});

module.exports = router;
