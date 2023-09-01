const nodemailer = require('nodemailer')
const asyncHandler = require('express-async-handler')

// Heads Up! Keep in mind that you have to pass the
// 'data' parameter just before the 'req' parameter.
const sendMail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MP
    }
  })

  const info = await transporter.sendMail({
    from: '"Hey 👻" <foo@gmail.com>', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.html, // html body
  })

  console.log('Message sent: %s', info.messageId)

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
})

module.exports = {
  sendMail
}