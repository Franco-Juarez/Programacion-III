const {
  createLibroModel,
  getLibrosModel,
  getLibroIdModel,
  updateLibroModel,
} = require("../models/libros.model");
const CustomError = require("../utils/custom-error");

class LibrosController {
  async createLibro(req, res, next) {
    try {
      const libro = req.body;
      if (
        !libro.titulo ||
        !libro.autor ||
        !libro.genero ||
        !libro.anioPublicacion ||
        !libro.descripcion
      ) {
        throw new CustomError("Faltan datos obligatorios", 400);
      }
      const nuevoLibro = await createLibroModel(libro);
      res.status(201).json(nuevoLibro);
    } catch (error) {
      next(error);
    }
  }

  async getLibros(req, res, next) {
    try {
      const libros = await getLibrosModel();

      res.status(200).json(libros);
    } catch (error) {
      next(error);
    }
  }

  async getLibroById(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const libro = await getLibroIdModel(id);
      if (!libro) {
        throw new CustomError(`Libro no encontrado con el id ${id}`, 404);
      }
      res.status(200).json(libro);
    } catch (error) {
      next(error);
    }
  }

  async updateLibro(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const libro = req.body;

      if (
        !libro.titulo ||
        !libro.autor ||
        !libro.genero ||
        !libro.anioPublicacion ||
        !libro.descripcion
      ) {
        throw new CustomError("Faltan datos obligatorios", 400);
      }

      const libroExistente = await getLibroIdModel(id);

      if (!libroExistente) {
        throw new CustomError(`No existe un libro con el id ${id}`, 404);
      }

      const libroActualizado = await updateLibroModel(id, libro);
      res.status(200).json({ mensaje: "Libro actualizado", libroActualizado });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new LibrosController();