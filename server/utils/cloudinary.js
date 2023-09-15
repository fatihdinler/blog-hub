// Heads Up! If you want to copy the entire code and paste it into
// your code snippet, then you have to use exact cloudinary version
// that can be found in package.json file.

const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY
})

const cloudinaryUploadImage = async (fileToUploads) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(fileToUploads, (result) => {
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id
        },
        {
          resource_type: 'auto',
        }
      )
    })
  })
}

const cloudinaryDeleteImage = async (fileToDelete) => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(fileToDelete, (result) => {
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id
        },
        {
          resource_type: 'auto',
        }
      )
    })
  })
}

module.exports = { cloudinaryUploadImage, cloudinaryDeleteImage }