const {Router} = require('express');

const librosController = require('../controllers/libros.controller');

const rutaLibros = Router();

rutaLibros.get('/', librosController.getLibros)
rutaLibros.post('/', librosController.createLibro);
rutaLibros.get('/:id', librosController.getLibroById);

module.exports = rutaLibros;