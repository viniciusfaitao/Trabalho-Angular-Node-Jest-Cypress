const express = require('express')
const veterinaryRouter = require('./routes/veterinary.routes');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(bodyParser.json())

app.use(veterinaryRouter)

module.exports = app
