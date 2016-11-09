var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({tweets: [{text: 'Trump is a big red carrot', }]});
});

module.exports = router;
