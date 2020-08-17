const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.redirect('http://google.com')
})

app.listen('3000')