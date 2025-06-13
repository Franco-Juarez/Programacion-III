const PersonasModel = require("../models/personas.model");

class PersonasController {
  async getPersonas(req, res) {
    try {
      const personas = await PersonasModel.getAll();
      res.status(200).json(personas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PersonasController();