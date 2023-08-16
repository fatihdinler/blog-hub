const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const dbConnect = require('./config/db')
const PORT = process.env.PORT || 4000
const authRouter = require('./routes/auth-route')

dbConnect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send({ message: 'Hello from server side !' })
})

app.use('/api/user', authRouter)

app.listen(PORT, () => {
	console.log(`>>> server is running at http://localhost:${PORT}`)
})