var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var tweets = db.get('tweets');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
