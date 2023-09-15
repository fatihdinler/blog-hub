const express = require('express')
const router = express.Router()
const { isAdmin, authMiddleware } = require('../middlewares/auth-middleware')
const {
  createEnquiry,
  updateEnquiry,
  getEnquiry,
  getEnquiries,
  deleteEnquiry
} = require('../controllers/enquiry-controller')

router.post('/create', authMiddleware, isAdmin, createEnquiry)
router.put('/edit/:id', authMiddleware, isAdmin, updateEnquiry)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteEnquiry)
router.get('/get-enquiry/:id', getEnquiry)
router.get('/get-enquiries', getEnquiries)

module.exports = router