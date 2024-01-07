import express from 'express'
import dotenv from 'dotenv'
import { connectToDb } from './src/utils/db.js'
import { errorHandler } from './src/utils/error.js'
import userRouter from './src/routers/user.route.js'

const baseApiUrl = `/api/v1`

dotenv.config()
const PORT = process.env.PORT || 3001
connectToDb()

const app = express()

app.use(express.json())

app.use(`${baseApiUrl}/users`, userRouter)

/** Error handler must be placed after the all routes! */
app.use(errorHandler)

app.listen(PORT, () => {
   if (PORT === 3001) {
      console.log(`>>> You may not set your .env file correctly.`)
   }
   console.log(`>>> server is running on http://localhost:${PORT}`)
})