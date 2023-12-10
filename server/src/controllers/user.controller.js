const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const asyncHandler = require('express-async-handler')
const { v4: uuid } = require('uuid')

const createUser = asyncHandler(async (req, res) => {
  console.log('içerde')
  try {
    const { username, password, email, profileImage, birthDate } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const userId = uuid()
    const user = await User.create({ id: userId, username, password: hashedPassword, email, profileImage, birthDate })
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
    throw new Error(err)
  }
})

const login = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Geçersiz şifre' })
    }

    const accessToken = jwt.sign({ userId: user.id }, process.env.SECRET_KEY_FOR_ACCESS_TOKEN, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN })
    const refreshToken = jwt.sign({ userId: user.id }, process.env.SECRET_KEY_FOR_REFRESH_TOKEN, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN })

    await User.findOneAndUpdate({ id: user.id }, { accessToken, refreshToken })

    res.status(200).json({ accessToken, refreshToken })
  } catch (err) {
    res.status(500).json({ message: err.message })
    throw new Error(err)
  }
})

const logout = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body
    await User.findOneAndUpdate({ id }, { accessToken: null, refreshToken: null })
    res.status(200).json({ message: 'Kullanıcı çıkış yaptı' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { username, password, email, profileImage, birthDate, department, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(req.params.id, { username, password: hashedPassword, email, profileImage, birthDate, department, role });
    res.status(200).json({ message: 'Kullanıcı güncellendi' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Kullanıcı silindi' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  login,
  logout,
}