const express = require("express");
const rutaPersonas = require("./routes/personas.routes");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.app.use(express.json());
    this.app.use(cors());
    this.rutas();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server corriendo en el puerto ${this.port}`);
    });
  }

  rutas() {
    this.app.use("/api/personas", rutaPersonas);
  }
}

module.exports = Server;
