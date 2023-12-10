const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    default: uuidv4,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String
  },
  birthDate: {
    type: Date
  },
  // department: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Department'
  // },
  // role: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Role'
  // },
  accessToken: {
    type: String
  },
  refreshToken: {
    type: String
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
