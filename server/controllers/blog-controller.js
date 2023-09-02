const Blog = require('../models/blog-model')
const User = require('../models/user-model')
const asyncHandler = require('express-async-handler')
const validateMongoDBId = require('../utils/validate-mongodb-id')

const createBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.create(req.body)
    if (blog) {
      res
        .status(200)
        .json({ success: true, message: 'Blog is created successfully!', blog })
    }
  } catch (error) {
    throw new Error('!>> createBlog controller >>>', error)
  }
})

const updateBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const blog = await Blog.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    })

    if (blog) {
      res.status(200).json({ success: true, message: 'Blog is updated successfully', blog })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const deletedBlog = await Blog.findOneAndDelete({ _id: id })
    if (deletedBlog) {
      res.status(200).json({ success: true, message: 'Blog is deleted successfully' })
    }
    else {
      res.status(404).json({ success: false, message: 'Something went wrong while deleting the blog' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const blog = await Blog.findById(id)
    await Blog.findByIdAndUpdate(id, { $inc: { numViews: 1 } }, { new: true })

    if (blog) {
      res.status(200).json({ success: true, blog })
    } else {
      res.status(409).json({ success: false, message: 'There is no blog' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find()

    if (blogs.length >= 0) {
      res.status(200).json({ success: true, blogs })
    }
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogs
}