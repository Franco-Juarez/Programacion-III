const dotenv = require("dotenv");
dotenv.config();
class Config {
  constructor() {
    //TODO: verificar que existean las constantes del .env
    if (!process.env.SECRETE_WORD || !process.env.EXPIRES_IN) {
      throw new Error(
        "Faltan variables de entorno requeridas: SECRETE_WORD o EXPIRES_IN"
      );
    }
    this.secreteWord = process.env.SECRETE_WORD;
    this.expiresIn = process.env.EXPIRES_IN;
  }
}
module.exports = new Config();
