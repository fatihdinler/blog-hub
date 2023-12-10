const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middlware')
const { createUser, login, logout } = require('../controllers/user.controller')

router.post('/create', createUser)
router.post('/login', login)
router.post('/logout', logout)

// router.post('/login', login)
// router.post('/logout', logout)
// router.get('/users/:id', getUserById)
// router.put('/users/:id', updateUser)
// router.delete('/users/:id', deleteUser)

module.exports = router

// Protected route example.
// router.get('/protected-route', authMiddleware, (req, res) => {
//   res.send(`You are authorized!`)
// })
