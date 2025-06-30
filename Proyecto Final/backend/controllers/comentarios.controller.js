const comentarioService = require("../services/comentarios.service");
const CustomError = require("../utils/custom-error");

class ComentariosController {
  async getComentarios(req, res, next) {
    try {
      const comentarios = await comentarioService.getAllComentarios();
      res.status(200).json(comentarios);
    } catch (error) {
      next(error);
    }
  }

  async getComentariosByLibro(req, res, next) {
    try {
      const libroId = parseInt(req.params.libroId);
      const comentarios = await comentarioService.getComentariosByLibro(
        libroId
      );
      if (!comentarios || comentarios.length === 0) {
        throw new CustomError(
          `No se encontraron comentarios para el libro con id ${libroId}`,
          404
        );
      }
      res.status(200).json(comentarios);
    } catch (error) {
      next(error);
    }
  }

  async getComentarioById(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const comentario = await comentarioService.getComentarioById(id);
      if (!comentario) {
        throw new CustomError(`Comentario no encontrado con el id ${id}`, 404);
      }
      res.status(200).json(comentario);
    } catch (error) {
      next(error);
    }
  }

  async createComentario(req, res, next) {
    try {
      const comentario = req.body;
      if (!comentario.libroId || !comentario.texto) {
        throw new CustomError("Faltan datos obligatorios", 400);
      }
      const nuevoComentario = await comentarioService.createComentario(
        comentario
      );
      res.status(201).json(nuevoComentario);
    } catch (error) {
      next(error);
    }
  }

  async deleteComentario(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const comentario = await comentarioService.deleteComentario(id);
      if (!comentario) {
        throw new CustomError(`Comentario no encontrado con el id ${id}`, 404);
      }
      res.status(200).json(comentario);
    } catch (error) {
      next(error);
    }
  }

  async updateComentario(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const comentarioData = req.body;
      const comentarioActualizado = await comentarioService.updateComentario(
        id,
        comentarioData
      );
      if (!comentarioActualizado) {
        throw new CustomError(`Comentario no encontrado con el id ${id}`, 404);
      }
      res.status(200).json(comentarioActualizado);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ComentariosController();