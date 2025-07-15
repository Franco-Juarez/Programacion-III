const comentarioSchema = require("../schemas/comentario.schema");

const validarComentario = (tipo) => {
  return (req, res, next) => {
    const { error } = comentarioSchema[tipo].validate(req.body, { abortEarly: false });

    if (error) {
      const mensajes = error.details.map((err) => err.message);
      return res.status(400).json({ errores: mensajes });
    }

    next();
  };
};

module.exports = validarComentario;
