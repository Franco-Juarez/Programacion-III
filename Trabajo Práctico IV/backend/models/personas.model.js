class PersonasModel {
  constructor() {
    this.personas = [
      {
        id: 1,
        nombre: "Lionel",
        apellido: "Messi",
        edad: 37,
        email: "lionelmessi@gmail.com",
      },
      {
        id: 2,
        nombre: "Cristiano",
        apellido: "Ronaldo",
        edad: 40,
        email: "cristiano@gmail.com",
      },
      {
        id: 3,
        nombre: "Neymar",
        apellido: "Jr",
        edad: 33,
        email: "neymar@gmail.com",
      },
      {
        id: 4,
        nombre: "Kylian",
        apellido: "Mbappé",
        edad: 26,
        email: "kylian@gmail.com",
      },
      {
        id: 5,
        nombre: "Julián",
        apellido: "Álvarez",
        edad: 25,
        email: "julialvarez@gmail.com",
      },
    ];
  }
  getAll() {
    return new Promise((resolve, reject) => resolve(this.personas));
  }
}

module.exports = new PersonasModel();