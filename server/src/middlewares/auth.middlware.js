const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const authMiddleware = async (req, res, next) => {
  try {
    // Burada gelen talebin header'ından token'ı al
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      throw new Error('Yetkilendirme başarısız: Geçersiz ya da eksik token');
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY_FOR_ACCESS_TOKEN); // token'ı doğrula, bu kısmı kendi projenize göre düzenleyin

    const user = await User.findOne({ id: decoded.userId, accessToken: token }); // Kullanıcıyı bul

    if (!user) {
      throw new Error('Yetkilendirme başarısız: Kullanıcı bulunamadı');
    }

    req.user = user; // Kullanıcıyı request nesnesine ekle
    next(); // Middleware'den geçtiyse devam et
  } catch (error) {
    res.status(401).json({ error: 'Yetkilendirme başarısız: Geçersiz ya da eksik token' });
  }
};

module.exports = authMiddleware;
