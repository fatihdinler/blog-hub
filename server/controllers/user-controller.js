const express = require('express')
const path = require('path')
const { upload } = require('../multer')
const User = require('../models/user-model')
const ErrorHandler = require('../utils/error-handler')

const router = express.Router()

router.post('/create-user', upload.single('file'), async (req, res, next) => {
    console.log(req.body)
    const { name, email, password } = req.body
    const userEmail = await User.findOne({ email })

    if (userEmail) {
        return next(new ErrorHandler(`${userEmail} user already exists`, 400))
    }

    const filename = req.file.filename
    const fileUrl = path.join(filename)
    const avatar = fileUrl

    const user = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl
    }

    console.log('user --->', user)
})

module.exports = router