const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./src/middlewares/error.middleware')
const connectDb = require('./src/utils/db')
const userRoutes = require('./src/routes/user.route')

connectDb()
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 4001
const baseApiUrl = `/api/v1`

app.use(`${baseApiUrl}/users`, userRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`>>> server app is running on http://localhost:${PORT}`) // Değişiklik yapıldı
})
