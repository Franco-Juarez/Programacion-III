const { Libro, Comentario } = require("../models");

async function getLibrosModel() {
  const libros = await Libro.findAll();
  return libros;
}

async function getLibroIdModel(id) {
  const libro = await Libro.findByPk(id, {
    include: {
      model: Comentario,
      as: "comentarios",
      required: false,
    },
  });
  if (!libro) return null;

  return libro;
}

async function createLibroModel(libro) {
  const nuevoLibro = await Libro.create(libro);
  return nuevoLibro;
}

/*
No es necesario
async function getLibrosPorGeneroModel(genero) {
    const libros = await Libro.findAll({
        where: {
            genero: genero
        }
    });
    return libros;
}
*/

async function deleteLibroModel(id) {
  const libro = await Libro.findByPk(id);
  if (!libro) {
    throw new Error(`Libro con el id ${id} no encontrado`);
  }
  await libro.destroy();
  return libro;
}

async function updateLibroModel(id, libro) {
  const libroExistente = await Libro.findByPk(id);
  if (!libroExistente) {
    throw new Error(`Libro con el id ${id} no encontrado`);
  }
  const libroActualizado = await libroExistente.update(libro);
  return libroActualizado;
}

module.exports = {
  getLibrosModel,
  getLibroIdModel,
  createLibroModel,
  //getLibrosPorGeneroModel,
  deleteLibroModel,
  updateLibroModel,
};
