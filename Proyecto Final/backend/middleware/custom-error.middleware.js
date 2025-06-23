const CustomError = require("../utils/custom-error.js");

function errorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.error(err);
  res.status(500).json({ message: "Error interno del servidor" });
}

module.exports = errorHandler;
