const app = require('./app')

port = 3100

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})
