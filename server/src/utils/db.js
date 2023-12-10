const mongoose = require('mongoose')

const connectDb = () => {
  try {
    const connection = mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.PLANIFY_DB_NAME}`)
    console.log(`>>> MongoDB is established successfully!`)
  } catch (error) {
    console.log(`>>> something went wrong while connecting to MongoDB`)
    throw new Error(error)
  }
}

module.exports = connectDb