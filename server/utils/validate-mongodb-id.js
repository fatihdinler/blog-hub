const mongoose = require('mongoose')

const validateMongoDBId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id)
  if (!isValid) {
    throw new Error(`The id ${id} is not valid id, or the id that you are looking for is not found.`)
  }
}

module.exports = validateMongoDBId