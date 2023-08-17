const User = require('../models/user-model')
const asyncHandler = require('express-async-handler')

const createUser = asyncHandler(async (req, res) => {
  const { email } = req.body
  const findUser = await User.findOne({ email: email })

  if (!findUser) {
    // Create a new User.
    const newUser = await User.create(req.body)
    res.status(200).json({
      success: true,
      message: 'User created successfully !',
      newUser
    })
  } else {
    throw new Error('User is alredy exists !')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check if user exists
  const findUser = await User.findOne({ email: email })

  if (findUser) {
    const isPasswordMatched = await findUser.isPasswordMatched(password)
    if (isPasswordMatched) {
      res.status(200).json({ success: true, user: findUser, statusCode: 200 })
    } else {
      // Incorrect password
      res.status(401).json({ success: false, message: 'Incorrect password', statusCode: 401 })
    }
  } else {
    // User doesn't exist
    res.status(404).json({ success: false, message: 'User not found', statusCode: 404, })
  }
})


module.exports = { createUser, loginUser }