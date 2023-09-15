const express = require('express')
const router = express.Router()
const { isAdmin, authMiddleware } = require('../middlewares/auth-middleware')
const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getColors
} = require('../controllers/color-controller')

router.post('/create', authMiddleware, isAdmin, createColor)
router.put('/edit/:id', authMiddleware, isAdmin, updateColor)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteColor)
router.get('/get-color/:id', getColor)
router.get('/get-colors', getColors)

module.exports = router