const {Router} = require('express');
const comentariosController = require('../controllers/comentarios.controller');

const rutaComentarios = Router();

rutaComentarios.get('/', comentariosController.getComentarios);
rutaComentarios.get('/libro/:libroId', comentariosController.getComentariosByLibro);
rutaComentarios.get('/:id', comentariosController.getComentarioById);
rutaComentarios.post('/', comentariosController.createComentario);
rutaComentarios.delete('/:id', comentariosController.deleteComentario);
rutaComentarios.put('/:id', comentariosController.updateComentario);

module.exports = rutaComentarios;