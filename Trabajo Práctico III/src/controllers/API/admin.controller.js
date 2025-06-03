const { validate, createAdminModel } = require("../../models/sqlite/admin.model");
const CustomError = require("../../utils/customError");

class AdminController {
  async login(req, res, next) {
    //recolecto credenciales
    try {
      const { email, password } = req.body;

      const token = await validate(email, password);

      if (!token) {
        throw new CustomError("Credenciales inválidas", 401);
      }

      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const body = req.body;

      if (!body.dni || !body.nombre || !body.apellido || !body.email || !body.password) {
        throw new CustomError("Faltan datos en la petición", 400);
      }

      const info = await createAdminModel(body);
      return res.status(200).json(info);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AdminController();