const {Router} = require('express');
const comentariosController = require('../controllers/comentarios.controller');
const validarComentario = require("../middlewares/validarComentario");
const rutaComentarios = Router();

rutaComentarios.get('/', comentariosController.getComentarios);
rutaComentarios.get('/libro/:libroId', comentariosController.getComentariosByLibro);
rutaComentarios.get('/:id', comentariosController.getComentarioById);
rutaComentarios.post('/', validarComentario("create"), comentariosController.createComentario);
rutaComentarios.delete('/:id', comentariosController.deleteComentario);
rutaComentarios.put('/:id', validarComentario("edit"), comentariosController.updateComentario);

module.exports = rutaComentarios;