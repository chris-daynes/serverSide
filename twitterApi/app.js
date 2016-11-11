require('dotenv').config()
const _ = require('lodash')
const Twit = require('twit')
const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

function getSampleTweets (keyword) {
  T.get('search/tweets', { q: keyword, count: 10 }, function (err, data, response) {
    let statuses = data.statuses.map((tweet) => {
      return {date: tweet.created_at,
              text: tweet.text,
              author: tweet.user.screen_name,
              city: tweet.user.location,
              subject: keyword
            }
    })
    console.log(statuses)
  })
}

getSampleTweets('hillary')

module.exports = getSampleTweets
