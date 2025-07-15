const {Router} = require('express');

const librosController = require('../controllers/libros.controller');
const validarLibro = require('../middleware/validarLibro');

const rutaLibros = Router();

rutaLibros.get('/', librosController.getLibros)
rutaLibros.post('/', validarLibro("create"), librosController.createLibro);
rutaLibros.get('/generos', librosController.getAllGeneros);
rutaLibros.get('/:id', librosController.getLibroById);
rutaLibros.put('/:id', validarLibro("update"), librosController.updateLibro);
rutaLibros.delete('/:id', librosController.deleteLibro);
module.exports = rutaLibros;