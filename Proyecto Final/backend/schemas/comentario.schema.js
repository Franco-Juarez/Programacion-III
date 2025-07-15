const Joi = require("joi");

const comentarioSchema = {
  create: Joi.object({
    libroId: Joi.number()
      .integer()
      .positive()
      .required()
      .messages({
        "number.base": "El ID del libro debe ser un número",
        "number.integer": "El ID del libro debe ser un número entero",
        "number.positive": "El ID del libro debe ser un número positivo",
        "any.required": "El ID del libro es obligatorio",
      }),
    texto: Joi.string()
      .min(3)
      .max(500)
      .required()
      .messages({
        "string.base": "El comentario debe ser un texto",
        "string.min": "El comentario debe tener al menos 3 caracteres",
        "string.max": "El comentario no puede superar los 500 caracteres",
        "any.required": "El texto del comentario es obligatorio",
      }),
  }),

  edit: Joi.object({
    texto: Joi.string()
      .min(3)
      .max(500)
      .required()
      .messages({
        "string.base": "El comentario debe ser un texto",
        "string.min": "El comentario debe tener al menos 3 caracteres",
        "string.max": "El comentario no puede superar los 500 caracteres",
        "any.required": "El texto del comentario es obligatorio",
      }),
  }),
};

module.exports = comentarioSchema;
