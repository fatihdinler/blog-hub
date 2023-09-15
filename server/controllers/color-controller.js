const Color = require('../models/color-model')
const asyncHandler = require('express-async-handler')
const validateMongoDBId = require('../utils/validate-mongodb-id')

const createColor = asyncHandler(async (req, res) => {
  try {
    const color = await Color.create(req.body)
    if (color) {
      res.status(200).json(color)
    }
  } catch (error) {
    throw new Error(error)
  }
})

const updateColor = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const color = await Color.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    })

    if (color) {
      res.status(200).json({ success: true, message: 'Color is updated successfully', color })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const deleteColor = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const deletedColor = await Color.findOneAndDelete({ _id: id })

    if (deletedColor) {
      res.status(200).json({ success: true, message: 'Color is Deleted Successfully' })
    } else {
      throw new Error('Something went wrong while deleting the color')
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getColor = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const color = await Color.findById(id)

    if (color) {
      res.status(200).json({ success: true, color })
    } else {
      throw new Error('There is no color')
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getColors = asyncHandler(async (req, res) => {
  try {
    const colors = await Color.find({})

    if (colors.length > 0) {
      res.status(200).json({ success: true, colors, numberOfCategories: colors.length })
    }
    else if (colors.length === 0) {
      res.status(200).json({ success: true, message: 'There is no colors', colors, numberOfCategories: colors.length })
    }
    else {
      res.status(404).json({ success: false, message: 'Something went wrong while fetching colors' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getColors,
}