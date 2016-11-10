var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var tweets = require('./routes/tweets')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1/tweets', tweets)
app.get('/', (req, res) => res.redirect('/api/v1/tweets'))

module.exports = app
