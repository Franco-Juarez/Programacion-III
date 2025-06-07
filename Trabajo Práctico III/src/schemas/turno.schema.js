const Joi = require("joi");

const turnoSchema = {
  create: Joi.object({
    fecha: Joi.date()
      .required()
      .messages({ "date.base": "La fecha debe ser valida" }),
    hora: Joi.string()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
      .required(),
    idPaciente: Joi.number()
      .integer()
      .required()
      .messages({
        "number.base": "El id del paciente debe ser un numero entero",
      }),
  }),

  update: Joi.object({
    fecha: Joi.date()
      .required()
      .messages({ "date.base": "La fecha debe ser valida" }),
    hora: Joi.string()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
      .required(),
    idPaciente: Joi.number()
      .integer()
      .required()
      .messages({
        "number.base": "El id del paciente debe ser un numero entero",
      }),
  }),

  idParam: Joi.object({
    id: Joi.number()
      .integer()
      .required()
      .messages({ "number.base": "El id del turno debe ser un numero entero" }),
  }),
};

module.exports = turnoSchema;
