const { Libro, Comentario } = require("../models");
const { validarLibroEstado } = require("../utils/validar-libro-estado");

class ComentarioService {
  async getAllComentarios() {
    const comentarios = await Comentario.findAll();
    return comentarios;
  }

  async getComentarioById(id) {
    const comentario = await Comentario.findByPk(id, {
      include: {
        model: Libro,
        as: "libro",
        required: false,
      },
    });

    return comentario;
  }

  async getComentariosByLibro(libroId) {
    const comentarios = await Comentario.findAll({
      where: { libroId },
      include: {
        model: Libro,
        as: "libro",
        required: false,
      },
    });
    return comentarios;
  }

  async createComentario(comentario) {
    const libro = await Libro.findByPk(comentario.libroId, {
      attributes: ["estado"],
    });
    if (!libro) {
      throw new Error("Libro no encontrado");
    }
    
    validarLibroEstado(libro);

    const nuevoComentario = await Comentario.create(comentario);
    return nuevoComentario;
  }

  async deleteComentario(id) {
    const comentario = await Comentario.findByPk(id);
    await comentario.destroy();
    return comentario;
  }

  async updateComentario(id, comentario) {
    const comentarioExistente = await Comentario.findByPk(id);
    const comentarioActualizado = await comentarioExistente.update(comentario);
    return comentarioActualizado;
  }
}

module.exports = new ComentarioService();
