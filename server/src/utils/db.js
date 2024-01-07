import mongoose from 'mongoose'

export const connectToDb = async () => {
  if (!process.env.MONGODB_URL) {
    console.log(`>>> Your MONGODB_URL is not set correctly in .env file`)
    return
  } else {
    mongoose.connect(process.env.MONGODB_URL, {
      autoIndex: true
    })
      .then(console.log(`>>> Connected to Database sucessfully`))
      .catch(err => console.log(`>>> error occurred while connecting to Database: ${err}`))
  }
}
