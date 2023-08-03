const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true       
    }).then((res) => console.log(`mongod connected with server ${res.connection.host}`))
}

module.exports = connectDB