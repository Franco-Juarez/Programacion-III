const libroService = require("../services/libros.service");
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

      if(libro.anioPublicacion <= 0) {
        throw new CustomError("El año de publicación debe ser un número positivo", 400);
      }

      const nuevoLibro = await libroService.createLibro(libro);
      res.status(201).json(nuevoLibro);
    } catch (error) {
      next(error);
    }
  }

  async getLibros(req, res, next) {
    try {
      const { titulo, autor, genero, anioPublicacion, calificacion, estado } =
        req.query;
      const filtros = {};

      if (titulo) {
        filtros.titulo = titulo;
      }

      if (autor) {
        filtros.autor = autor;
      }

      if (genero) {
        filtros.genero = genero;
      }
      if (anioPublicacion) {
        const anio = parseInt(anioPublicacion);
        if (isNaN(anio) || anio <= 0) {
          throw new CustomError(
            "El año de publicación debe ser un número positivo",
            400
          );
        }
        filtros.anioPublicacion = anio;
      }
      if (calificacion) {
        const calificacionNum = parseInt(calificacion);
        if (
          isNaN(calificacionNum) ||
          calificacionNum < 0 ||
          calificacionNum > 5
        ) {
          throw new CustomError("La calificación debe estar entre 0 y 5", 400);
        }
        filtros.calificacion = calificacionNum;
      }
      if (estado) {
        if (estado !== "read" && estado !== "reading" && estado !== "unread") {
          throw new CustomError(
            "El estado debe ser 'read', 'reading' o 'unread'",
            400
          );
        }
        filtros.estado = estado;
      }

      const libros = await libroService.getAllLibros(filtros);
      res.status(200).json(libros);
    } catch (error) {
      next(error);
    }
  }

  async getLibroById(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const libro = await libroService.getLibroById(id);
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

      const libroExistente = await libroService.getLibroById(id);
      if (!libroExistente) {
        throw new CustomError(`No existe un libro con el id ${id}`, 404);
      }

      const camposActualizar = {};

      if (
        libro.titulo != null &&
        libro.titulo != undefined &&
        libro.titulo != ""
      ) {
        camposActualizar.titulo = libro.titulo;
      }
      if (
        libro.autor != null &&
        libro.autor != undefined &&
        libro.autor != ""
      ) {
        camposActualizar.autor = libro.autor;
      }
      if (
        libro.genero != null &&
        libro.genero != undefined &&
        libro.genero != ""
      ) {
        camposActualizar.genero = libro.genero;
      }
      if (
        libro.anioPublicacion != null &&
        libro.anioPublicacion != undefined &&
        libro.anioPublicacion > 0
      ) {
        camposActualizar.anioPublicacion = libro.anioPublicacion;
      }
      if (
        libro.descripcion != null &&
        libro.descripcion != undefined &&
        libro.descripcion != ""
      ) {
        camposActualizar.descripcion = libro.descripcion;
      }

      if (libro.estado != null && libro.estado != undefined) {
        if (
          libro.estado === "read" ||
          libro.estado === "reading" ||
          libro.estado === "unread"
        ) {
          if (libro.estado === "unread") {
            camposActualizar.calificacion = 0;
          }
          camposActualizar.estado = libro.estado;
        } else {
          throw new CustomError(
            "El estado debe ser 'read', 'reading' o 'unread'",
            400
          );
        }
      }

      const estadoFinal =
        camposActualizar.estado !== null &&
        camposActualizar.estado !== undefined &&
        camposActualizar.estado !== ""
          ? camposActualizar.estado
          : libroExistente.estado;


      if (libro.calificacion != null && libro.calificacion != undefined) {
        if (libro.calificacion < 0 || libro.calificacion > 5) {
          throw new CustomError("La calificación debe estar entre 0 y 5", 400);
        }

        if (estadoFinal !== "read" && estadoFinal !== "reading" && libro.calificacion !== 0) {
          throw new CustomError(
            "La calificación solo puede ser asignada a libros leídos o en proceso de lectura",
            400
          );
        }
        camposActualizar.calificacion = libro.calificacion;
      }

      if (Object.keys(camposActualizar).length === 0) {
        throw new CustomError(
          "No se proporcionaron campos para actualizar",
          400
        );
      }

      const libroActualizado = await libroService.updateLibro(
        id,
        camposActualizar
      );
      res.status(200).json({ mensaje: "Libro actualizado", libroActualizado });
    } catch (error) {
      next(error);
    }
  }

  async deleteLibro(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const libro = await libroService.getLibroById(id);
      if (!libro) {
        throw new CustomError(`No existe un libro con el id ${id}`, 404);
      }
      await libroService.deleteLibro(id);
      res.status(200).json({ mensaje: `Libro con id ${id} eliminado` });
    } catch (error) {
      next(error);
    }
  }

  async getAllGeneros(req, res, next) {
    try {
      const generos = await libroService.getAllGeneros();
      if (!generos || generos.length === 0) {
        throw new CustomError("No se encontraron géneros", 404);
      }
      res.status(200).json(generos);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new LibrosController();