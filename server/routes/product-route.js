const express = require('express')
const { isAdmin, authMiddleware } = require('../middlewares/auth-middleware')
const { uploadPhoto, productImageResize } = require('../middlewares/upload-image')
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  uploadImages,
  deleteImages,
} = require('../controllers/product-controller')
const router = express.Router()

router.post('/create', authMiddleware, isAdmin, createProduct)
router.put('/upload', authMiddleware, isAdmin, uploadPhoto.array('images', 10), productImageResize, uploadImages)
router.get('/get-product/:id', getProduct)
router.put('/wishlist', authMiddleware, addToWishlist)
router.put('/rating', authMiddleware, rating)
router.get('/get-products', getProducts)
router.put('/edit/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct)
router.delete('/delete-image/:id', authMiddleware, isAdmin, deleteImages)

module.exports = router