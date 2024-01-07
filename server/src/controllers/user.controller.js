import User from '../models/user.model.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import { USER_LITERALS } from '../constants/literals.js'

export const signUp = asyncHandler(async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body
    let username = email.split('@')[0]
    let hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      personalInfo: {
        fullname,
        email,
        password: hashedPassword,
        username
      }
    })
    if (user) {
      res.status(200).json(user)
    } else {
      res
        .status(404)
        .json({ success: false, error: USER_LITERALS.SOMETHING_WENT_WRONG_WHILE_CREATING_A_NEW_USER, date: new Date() })
    }

  } catch (error) {
    throw new Error(error)
  }
})