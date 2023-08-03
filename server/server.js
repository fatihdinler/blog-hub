const app = require('./app')
const connectDB = require('./db/database')


// uncaught error handler
process.on('uncaughtException', (error) => {
    console.log(`Error: ${error.message}`)
    console.log('Shutting down the server for handling uncaughtException')
})

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'config/.env'
    })
}

// connect DB
connectDB()

// create a server
const server = app.listen(process.env.PORT || 8001, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 8001}`)
})

process.on('unhandledRejection', (error) => {
    console.log(`Shutting down the server for ${error.message} (unhandledRejection)`)
    server.close(() => {
        process.exit(1)
    })
})