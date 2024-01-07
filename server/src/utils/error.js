export const errorHandler = (err, req, res, next) => {
  console.log(`>>> Error occurred, md:errorHandler: ${err}`)
  res.status(500).send(err)
} 