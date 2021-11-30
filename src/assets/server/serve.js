const express = require('express')
const routes = require('./app/routes/route');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(bodyParser.json(), routes)

port = 3100
app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})
