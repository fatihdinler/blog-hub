const errorHandler = (err, req, res, next) => {
  console.log(`>>> error in fn:errorHandler: ${err.stack}`)
  res.status(500).send(err)
  next()
}

module.exports = errorHandler