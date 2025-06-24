/* const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Libro = sequelize.define(
  "Libro",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anioPublicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM("read", "reading", "unread"),
      defaultValue: "unread",
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    tableName: "libros",
    timestamps: true,
  }
);

module.exports = Libro;
 */