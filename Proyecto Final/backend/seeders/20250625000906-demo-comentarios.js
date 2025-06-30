"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("comentarios", [
      {
        libroId: 1,
        texto:
          "Un clásico de la fantasía épica, lleno de aventuras y personajes inolvidables.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libroId: 3,
        texto:
          "Una obra maestra del realismo mágico, con una narrativa cautivadora.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libroId: 1,
        texto: "Buen libro, emocionante de principio a fin.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libroId: 4,
        texto:
          "Un romance encantador que explora las complejidades del amor y la sociedad.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("comentarios", null, {});
  },
};
