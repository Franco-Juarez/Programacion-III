const {Router} = require('express');

const librosController = require('../controllers/libros.controller');

const rutaLibros = Router();

rutaLibros.get('/', librosController.getLibros)
rutaLibros.post('/', librosController.createLibro);
rutaLibros.get('/generos', librosController.getAllGeneros);
rutaLibros.get('/:id', librosController.getLibroById);
rutaLibros.put('/:id', librosController.updateLibro);
rutaLibros.delete('/:id', librosController.deleteLibro);
module.exports = rutaLibros;