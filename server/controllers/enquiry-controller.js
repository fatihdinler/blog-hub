const Enquiry = require('../models/enquiry-model')
const asyncHandler = require('express-async-handler')
const validateMongoDBId = require('../utils/validate-mongodb-id')

const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body)
    if (enquiry) {
      res.status(200).json(enquiry)
    }
  } catch (error) {
    throw new Error(error)
  }
})

const updateEnquiry = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const enquiry = await Enquiry.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    })

    if (enquiry) {
      res.status(200).json({ success: true, message: 'Enquiry is updated successfully', enquiry })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const deleteEnquiry = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)
    console.log(id)
    const deletedEnquiry = await Enquiry.findOneAndDelete({ _id: id })


    if (deletedEnquiry) {
      res.status(200).json({ success: true, message: 'Enquiry is Deleted Successfully' })
    } else {
      throw new Error('Something went wrong while deleting the enquiry')
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getEnquiry = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const enquiry = await Enquiry.findById(id)

    if (enquiry) {
      res.status(200).json({ success: true, enquiry })
    } else {
      throw new Error('There is no enquiry')
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getEnquiries = asyncHandler(async (req, res) => {
  try {
    const enquiries = await Enquiry.find({})

    if (enquiries.length > 0) {
      res.status(200).json({ success: true, enquiries, numberOfEnquiries: enquiries.length })
    }
    else if (enquiries.length === 0) {
      res.status(200).json({ success: true, message: 'There is no enquiries', colors, numberOfEnquiries: enquiries.length })
    }
    else {
      res.status(404).json({ success: false, message: 'Something went wrong while fetching enquiries' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiries,
  getEnquiry,
}