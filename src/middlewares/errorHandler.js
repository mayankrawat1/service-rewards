module.exports = (err, req, res, next) => {
  console.log(err);
  if (!err.status) {
    res.status(500).send({
      error: { code: "UNKNOWN_ERROR", message: "An unknown error occurred." }
    });
  }
};
