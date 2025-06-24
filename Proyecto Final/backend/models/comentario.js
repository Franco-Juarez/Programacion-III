'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comentario.belongsTo(models.Libro, {
        foreignKey: 'libroId',
        as: 'libro',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Comentario.init({
    texto: DataTypes.TEXT,
    libroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'libros',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'Comentario',
    tableName: 'comentarios',
    timestamps: true,
  });
  return Comentario;
};