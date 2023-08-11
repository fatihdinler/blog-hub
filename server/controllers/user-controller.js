const express = require('express')
const path = require('path')
const { upload } = require('../multer')
const User = require('../models/user-model')
const ErrorHandler = require('../utils/error-handler')
const fs = require('fs')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/create-user', upload.single('file'), async (req, res, next) => {
	console.log(req.body)
	const { name, email, password } = req.body
	const userEmail = await User.findOne({ email })

	if (userEmail) {
		const filename = req.file.filename
		const filePath = `uploads/${filename}`
		fs.unlink(filePath, (error) => {
			if (error) {
				console.log(`Error at /create-user controller -> ${error}`)
				res.status(500).json({ message: 'Error deleting file' })
			} else {
				res.json({ message: 'File deleted successfully! ' })
			}
		})
		return next(new ErrorHandler(`${userEmail} user already exists`, 400))
	}

	const filename = req.file.filename
	const fileUrl = path.join(filename)

	const user = {
		name: name,
		email: email,
		password: password,
		avatar: fileUrl
	}

	const activationToken = createActivationToken(user)

	// const newUser = await User.create(user)
	// res.status(201).json({
	// 	success: true,
	// 	newUser: newUser
	// })

})

const createActivationToken = (user) => {
	return jwt.sign(user, process.env.ACTIVATION_SECRET, {expiresIn: '5m'})
}

module.exports = router