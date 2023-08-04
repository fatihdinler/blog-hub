const express = require('express')
const ErrorHandler = require('./utils/error-handler')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const user = require('./controllers/user-controller')

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'config/.env'
    })
}

// routes
app.use('/api/v2/user', user)

app.use(ErrorHandler)
module.exports = app