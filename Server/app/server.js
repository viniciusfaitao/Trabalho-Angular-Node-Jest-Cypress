const app = require('./app')

port = 3100

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
