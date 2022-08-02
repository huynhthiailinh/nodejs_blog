const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})