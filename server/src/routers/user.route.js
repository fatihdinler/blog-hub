import express from 'express'
import {
  signUp,
} from '../controllers/user.controller.js'
import { checkUserValidations } from '../validations/user.validation.js'
import { ROUTE_PATHS } from '../constants/types.js'

const userRouter = express.Router()

userRouter.post(ROUTE_PATHS.USERS.SIGN_UP, checkUserValidations, signUp)

export default userRouter