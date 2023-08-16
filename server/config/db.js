const mongoose = require('mongoose')

const dbConnect = () => {
	try {
		const connection = mongoose.connect(process.env.MONGODB_URL)
		console.log('>>> Database is Connected Successfully !')
	} catch (error) {
		console.log(`>>> Database Connection Error: ${error}`)
		throw new Error(error)
	}
}

module.exports = dbConnect