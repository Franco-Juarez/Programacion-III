const Joi = require("joi");

const libroSchema = {
  // Validación para crear un libro
  create: Joi.object({
    titulo: Joi.string().required().messages({
      "any.required": "El título es obligatorio",
      "string.empty": "El título no puede estar vacío",
    }),
    autor: Joi.string().required().messages({
      "any.required": "El autor es obligatorio",
      "string.empty": "El autor no puede estar vacío",
    }),
    genero: Joi.string().required().messages({
      "any.required": "El género es obligatorio",
      "string.empty": "El género no puede estar vacío",
    }),
    anioPublicacion: Joi.number().integer().min(0).required().messages({
      "any.required": "El año de publicación es obligatorio",
      "number.base": "Debe ser un número",
      "number.min": "El año debe ser mayor o igual a 0",
    }),
    descripcion: Joi.string().required().messages({
      "any.required": "La descripción es obligatoria",
      "string.empty": "La descripción no puede estar vacía",
    }),
    estado: Joi.string().valid("read", "reading", "unread").optional().messages({
      "any.only": "El estado debe ser 'read', 'reading' o 'unread'",
    }),
    calificacion: Joi.number().integer().min(0).max(5).optional().messages({
      "number.base": "La calificación debe ser un número entero",
      "number.min": "La calificación mínima es 0",
      "number.max": "La calificación máxima es 5",
    }),
  }),

  // Validación para actualizar un libro
  update: Joi.object({
    titulo: Joi.string().optional(),
    autor: Joi.string().optional(),
    genero: Joi.string().optional(),
    anioPublicacion: Joi.number().integer().min(0).optional(),
    descripcion: Joi.string().optional(),
    estado: Joi.string().valid("read", "reading", "unread").optional(),
    calificacion: Joi.number().integer().min(0).max(5).optional(),
  }).min(1).messages({
    "object.min": "Debes proporcionar al menos un campo para actualizar",
  }),

  
};

module.exports = libroSchema;
