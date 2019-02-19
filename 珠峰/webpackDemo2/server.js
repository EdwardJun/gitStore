// express

let express = require('express')

let app = express()

app.get('/user', (req, res) => {
  res.json({
    name: '珠峰111'
  })
})

app.listen(3000)