require('dotenv').config()
const _ = require('lodash')
const Twit = require('twit')
const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

// function getSampleTweets (keyword) {
//   T.get('search/tweets', { q: 'Trump', count: 10 }, function (err, data, response) {
//     console.log(data)
//   })
// }

module.exports = getSampleTweets
