const Joi = require("joi");

const adminSchema = {
    //validar el login de un administrador
    login: Joi.object({
        email: Joi.string()
            .email()
            .required()
            .messages({
                "string.email": "El email debe ser una dirección de correo electrónico válida",
                "any.required": "El email es obligatorio",
            }),
        password: Joi.string()
            .min(6)
            .max(20)
            .required()
            .messages({
                "string.base": "La contraseña debe ser una cadena de texto",
                "string.min": "La contraseña debe tener al menos 6 caracteres",
                "string.max": "La contraseña no puede exceder los 20 caracteres",
                "any.required": "La contraseña es obligatoria",
            }),
    }),
}

module.exports = adminSchema;