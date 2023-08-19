const User = require('../models/user-model')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token
  if (req.headers?.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
    try {
      if (token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decodedToken?.id)
        req.user = user
        next()
      }
    } catch (error) {
      throw new Error('Authorization token is Expired, please re-login.')
    }
  } else {
    throw new Error('There is no token attached to the header.')
  }
})

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user
  const user = await User.findOne({ email: email })
  if (user.role !== 'admin') {
    throw new Error('This user is not an admin user !')
  }
  else {
    next()
  }
})

module.exports = { authMiddleware, isAdmin }