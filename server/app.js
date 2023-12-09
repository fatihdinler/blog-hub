const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const app = express();
app.use(express.json());

app.post('/createdb', async (req, res) => {
  const { dbName } = req.body;

  try {
    // Yeni bir MongoDB bağlantısı oluşturulur
    const newConnection = mongoose.createConnection(`mongodb://localhost:27017/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Bu bağlantı üzerinden yeni bir şema ve model oluşturulabilir
    const NewModel = newConnection.model('NewModel', new mongoose.Schema({}));

    // İsteğe özel bir veri eklenmesi (Opsiyonel)
    const newData = new NewModel({ exampleField: 'exampleValue' });
    await newData.save();

    res.status(200).json({ message: `Veritabanı oluşturuldu: ${dbName}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
