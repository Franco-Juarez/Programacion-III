const { Libro, Comentario } = require("../models");

class LibroService {
  async getAllLibros() {
    const libros = await Libro.findAll();
    return libros;
  }

  async getLibroById(id) {
    const libro = await Libro.findByPk(id, {
      include: {
        model: Comentario,
        as: "comentarios",
        required: false,
      },
    });

    return libro;
  }

  async createLibro(libro) {
    const nuevoLibro = await Libro.create(libro);
    return nuevoLibro;
  }

  async deleteLibro(id) {
    const libro = await Libro.findByPk(id);
    await libro.destroy();
    return libro;
  }

  async updateLibro(id, datosActualizados) {
    const libroExistente = await Libro.findByPk(id);
    
    const libroActualizado = await libroExistente.update(datosActualizados);
    return libroActualizado;
  }
}

module.exports = new LibroService();
