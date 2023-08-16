const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const dbConnect = require('./config/db')
const PORT = process.env.PORT || 4000

dbConnect()

app.get('/', (req, res) => {
    res.send({message: 'Hello from server side !'})
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})