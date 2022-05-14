const express = require('express')
const app = express()

console.log('abcdeuoheut')

app.post('/', (req, res) => {
  res.send('Got a POST request')
})
