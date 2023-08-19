const express = require('express')
const router = express.Router()
const { createUser,  loginUser, getUsers, getUser, deleteUser, updateUser } = require('../controllers/user-controller')
const { authMiddleware, isAdmin } = require('../middlewares/auth-middleware')

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/get-users', getUsers)
router.get('/:id', authMiddleware, isAdmin, getUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

module.exports = router