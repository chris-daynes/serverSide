var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({tweets: [{
    date: '09-11-2016',
    city: 'Atlanta',
    text: 'Trump is a big red carrot'}]
  })
})

module.exports = router
