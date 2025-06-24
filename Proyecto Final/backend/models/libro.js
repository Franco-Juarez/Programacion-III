"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Libro.hasMany(models.Comentario, {
        foreignKey: "libroId",
        as: "comentarios",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Libro.init(
    {
      titulo: DataTypes.STRING,
      autor: DataTypes.STRING,
      anioPublicacion: DataTypes.INTEGER,
      genero: DataTypes.STRING,
      estado: DataTypes.ENUM("read", "reading", "unread"),
      descripcion: DataTypes.TEXT,
      calificacion: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Libro",
      tableName: "libros",
      timestamps: true,
    }
  );
  return Libro;
};
