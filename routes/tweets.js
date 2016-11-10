var express = require('express')
var router = express.Router()
// var getSampleTweets = require('../twitterApi/app')
var getTweets = require('../db/tweets-db')

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200)
  getTweets()
    .then(function (tweets) {
      console.log(tweets)
      res.json({tweets})
    })
  .catch((err) => {
  })
})

// router.get('/', function (req, res, next) {
//   getSampleTweets(req.query.keyword)
//     .then(function (result) {
//       console.log(result.data)
//     })
// })

module.exports = router
