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
      const nuevoLibro = await libroService.createLibro(libro);
      res.status(201).json(nuevoLibro);
    } catch (error) {
      next(error);
    }
  }

  async getLibros(req, res, next) {
    try {
      const libros = await libroService.getAllLibros();
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
      
      // Verificar que el libro existe
      const libroExistente = await libroService.getLibroById(id);
      if (!libroExistente) {
        throw new CustomError(`No existe un libro con el id ${id}`, 404);
      }

      const camposActualizar = {};

      if(libro.titulo != null && libro.titulo != undefined && libro.titulo != "") {
        camposActualizar.titulo = libro.titulo;
      }
      if(libro.autor != null && libro.autor != undefined && libro.autor != "") {
        camposActualizar.autor = libro.autor;
      }
      if(libro.genero != null && libro.genero != undefined && libro.genero != "") {
        camposActualizar.genero = libro.genero;   
      }
      if(libro.anioPublicacion != null && libro.anioPublicacion != undefined && libro.anioPublicacion > 0) {
        camposActualizar.anioPublicacion = libro.anioPublicacion;
      }
      if(libro.descripcion != null && libro.descripcion != undefined && libro.descripcion != "") {
        camposActualizar.descripcion = libro.descripcion;
      }
    
      if(libro.calificacion != null && libro.calificacion != undefined) {
        if(libro.calificacion >= 0 && libro.calificacion <= 5) {
          camposActualizar.calificacion = libro.calificacion;
        } else {
          throw new CustomError("La calificación debe estar entre 0 y 5", 400);
        }
      }

      if(libro.estado != null && libro.estado != undefined) {
        if(libro.estado === "read" || libro.estado === "reading" || libro.estado === "unread") {
          camposActualizar.estado = libro.estado;
        } else {
          throw new CustomError("El estado debe ser 'read', 'reading' o 'unread'", 400);
        }
      }
      
      if(Object.keys(camposActualizar).length === 0) {
        throw new CustomError("No se proporcionaron campos para actualizar", 400);
      }

      // Usar el servicio para actualizar con objeto plano
      const libroActualizado = await libroService.updateLibro(id, camposActualizar);
      res.status(200).json({ mensaje: "Libro actualizado", libroActualizado });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new LibrosController();
