/* const Libro = require("./libro.entity");
const Comentario = require("./comentario.entity");

Libro.hasMany(Comentario, {
  foreignKey: "libroId",
  as: "comentarios",
  onDelete: "CASCADE",
});
Comentario.belongsTo(Libro, {
  foreignKey: "libroId",
  as: "libro",
});

module.exports = {
  Libro,
  Comentario,
};
 */