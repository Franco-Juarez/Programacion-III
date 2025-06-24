/* const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Comentario = sequelize.define(
  "Comentario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    libroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "libros",
        key: "id",
      },
    },
  },
  {
    tableName: "comentarios",
    timestamps: true,
  }
);

module.exports = Comentario;
 */