const User = require('../models/user-model')

const createUser = async (req, res) => {
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
    // User is already exists !
    res.status(409).json({
      success: false,
      message: 'User is already exists !',
    })
  }
}

module.exports = { createUser }