const {Router} = require('express');
const PersonasController = require('../controllers/personas.controller');

const rutaPersonas = Router();

rutaPersonas.get('/', PersonasController.getPersonas)

module.exports = rutaPersonas;