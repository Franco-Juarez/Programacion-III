const Joi = require('joi');

const pacienteSchema = {
    create: Joi.object({
        dni: Joi.string().pattern(/^\d{7,8}$/).required().messages({
            'string.pattern.base': 'El DNI debe ser un número de 7 u 8 dígitos',
            'any.required': 'El DNI es obligatorio'
        }),
        nombre: Joi.string().min(3).max(50).required().messages({
            'string.base': 'El nombre debe ser una cadena de texto',
            'string.min': 'El nombre debe tener al menos 3 caracteres',
            'string.max': 'El nombre no puede exceder los 50 caracteres',
            'any.required': 'El nombre es obligatorio'
        }),
        apellido: Joi.string().min(3).max(50).required().messages({
            'string.base': 'El apellido debe ser una cadena de texto',
            'string.min': 'El apellido debe tener al menos 3 caracteres',
            'string.max': 'El apellido no puede exceder los 50 caracteres',
            'any.required': 'El apellido es obligatorio'
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'El email debe ser una dirección de correo electrónico válida',
            'any.required': 'El email es obligatorio'
        }),
        password: Joi.string().min(6).max(20).required().messages({
            'string.base': 'La contraseña debe ser una cadena de texto',
            'string.min': 'La contraseña debe tener al menos 6 caracteres',
            'string.max': 'La contraseña no puede exceder los 20 caracteres',
            'any.required': 'La contraseña es obligatoria'
        })
    }),

    update: Joi.object({
        dni: Joi.string().pattern(/^\d{7,8}$/).messages({
            'string.pattern.base': 'El DNI debe ser un número de 7 u 8 dígitos'
        }),
        nombre: Joi.string().min(3).max(50).messages({
            'string.base': 'El nombre debe ser una cadena de texto',
            'string.min': 'El nombre debe tener al menos 3 caracteres',
            'string.max': 'El nombre no puede exceder los 50 caracteres'
        }),
        apellido: Joi.string().min(3).max(50).messages({
            'string.base': 'El apellido debe ser una cadena de texto',
            'string.min': 'El apellido debe tener al menos 3 caracteres',
            'string.max': 'El apellido no puede exceder los 50 caracteres'
        }),
        email: Joi.string().email().messages({
            'string.email': 'El email debe ser una dirección de correo electrónico válida'
        }),
        password: Joi.string().min(6).max(20).messages({
            'string.base': 'La contraseña debe ser una cadena de texto',
            'string.min': 'La contraseña debe tener al menos 6 caracteres',
            'string.max': 'La contraseña no puede exceder los 20 caracteres'
        })
    }),

    getById: Joi.object({
        id: Joi.number().integer().positive().required().messages({
            'number.base': 'El ID debe ser un número entero positivo',
            'any.required': 'El ID es obligatorio'
        })
    }),

    login: Joi.object({
        email: Joi.string().email().required().messages({
            'string.email': 'El email debe ser una dirección de correo electrónico válida',
            'any.required': 'El email es obligatorio'
        }),
        password: Joi.string().min(6).max(20).required().messages({
            'string.base': 'La contraseña debe ser una cadena de texto',
            'string.min': 'La contraseña debe tener al menos 6 caracteres',
            'string.max': 'La contraseña no puede exceder los 20 caracteres',
            'any.required': 'La contraseña es obligatoria'
        })
    })
};	