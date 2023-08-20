const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	mobile: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdDate: {
		type: Date,
		default: Date.now,
	},
	role: {
		type: String,
		default: 'user'
	},
	cart: {
		type: Array,
		default: []
	},
	isBlocked: {
		type: Boolean,
		default: false
	},
	address: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Address'
	}],
	wishList: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'Product'
	}],
}, { timestamps: true })

userSchema.pre('save', async function (next) {
	// password encryption
	const salt = await bcrypt.genSaltSync(10)
	this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)