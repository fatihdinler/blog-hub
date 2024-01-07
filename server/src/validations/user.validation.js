import { ROUTE_PATHS } from '../constants/types.js'
import { USER_LITERALS } from '../constants/literals.js'
import { emailRegex, passwordRegex } from '../utils/regex.js'

export const checkUserValidations = (req, res, next) => {
  const {
    fullname,
    email,
    password,
  } = req.body

  let errors = []

  if (req.path === ROUTE_PATHS.USERS.SIGN_UP) {
    if (!fullname) {
      errors.push({ success: false, error: USER_LITERALS.FULLNAME_IS_REQUIRED_TO_CREATE_A_NEW_ACCOUNT, date: new Date() })
    }
    if (fullname && fullname.length < 3) {
      errors.push({ success: false, error: USER_LITERALS.FULLNAME_MUST_BE_AT_LEAST_THREE_LETTERS, date: new Date() })
    }
    if (!email) {
      errors.push({ success: false, error: USER_LITERALS.EMAIL_IS_REQUIRED_TO_CREATE_A_NEW_ACCOUNT, date: new Date() })
    }
    if (email && !emailRegex.test(email)) {
      errors.push({ success: false, error: USER_LITERALS.INVALID_EMAIL_FORMAT, date: new Date() })
    }
    if (!password) {
      errors.push({ success: false, error: USER_LITERALS.PASSWORD_IS_REQUIRED_TO_CREATE_A_NEW_ACCOUNT, date: new Date() })
    }
    if (password && !passwordRegex.test(password)) {
      errors.push({ success: false, error: USER_LITERALS.INVALID_PASSWORD_FORMAT, date: new Date() })
    }
  }

  if (errors.length > 0) {
    return res.status(403).json(errors)
  }
  else {
    next()
  }
}