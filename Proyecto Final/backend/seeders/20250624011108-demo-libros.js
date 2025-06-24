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

    await queryInterface.bulkInsert("libros", [
      {
        titulo: "El Señor de los Anillos",
        autor: "JRR Tolkien",
        anioPublicacion: 1954,
        genero: "Fantasía",
        descripcion:
          "El Señor de los Anillos: La Comunidad del Anillo es el primer libro de la trilogía de J.R.R. Tolkien, que narra la historia de Frodo Bolsón, un hobbit que hereda un anillo mágico, el Anillo Único, con el poder de controlar a todos los demás anillos y someter a la Tierra Media bajo el dominio de Sauron, el Señor Oscuro. Frodo, acompañado por un grupo diverso llamado la Comunidad del Anillo, emprende un peligroso viaje para destruir el Anillo en el Monte del Destino, enfrentándose a numerosos peligros y criaturas malvadas en su camino. ",
        estado: "unread",
        calificacion: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J. K. Rowling",
        anioPublicacion: 1997,
        genero: "Novela",
        descripcion:
          "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial, aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y se hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un mago!",
        estado: "unread",
        calificacion: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("libros", null, {});
  },
};
