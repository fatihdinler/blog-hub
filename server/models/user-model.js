const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

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
	refreshToken: {
		type: String,
	},
	passwordChangedAt: Date,
	passwordResetToken: String,
	passwordResetExpires: Date,
}, { timestamps: true })

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}
	// password encryption
	const salt = await bcrypt.genSaltSync(10)
	this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.createPasswordResetToken = async function () {
	const resetToken = crypto.randomBytes(32).toString('hex')
	this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
	this.passwordResetExpires = Date.now() + 30 * 60 * 1000 // 10 minutes
	return resetToken
}

module.exports = mongoose.model('User', userSchema)