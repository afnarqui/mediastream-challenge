'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const User = require('./models/User')
const router = require('./router/router')
// Setup Express.js app
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/',router)
// TODO: everything else

app.listen(3000)