"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("libros", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      anioPublicacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.ENUM("read", "reading", "unread"),
        defaultValue: "unread",
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      calificacion: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          min: 1,
          max: 5,
        },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Libros");
  },
};
