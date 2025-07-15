const libroSchema = require("../schemas/libro.schema");

// Middleware genérico para validar con Joi
const validarLibro = (tipo) => {
  return (req, res, next) => {
    const { error } = libroSchema[tipo].validate(req.body, { abortEarly: false });

    if (error) {
      const mensajes = error.details.map((err) => err.message);
      return res.status(400).json({ errores: mensajes });
    }

    next();
  };
};

module.exports = validarLibro;
