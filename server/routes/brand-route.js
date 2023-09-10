const express = require('express')
const router = express.Router()
const { isAdmin, authMiddleware } = require('../middlewares/auth-middleware')
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getBrands,
} = require('../controllers/brand-controller')

router.post('/create', authMiddleware, isAdmin, createBrand)
router.put('/edit/:id', authMiddleware, isAdmin, updateBrand)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteBrand)
router.get('/get-brand/:id', getBrand)
router.get('/get-brands', getBrands)

module.exports = router