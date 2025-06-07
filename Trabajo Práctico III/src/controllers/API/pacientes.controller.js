const CustomError = require("../../utils/customError.js");
const {
  getPacientesModel,
  createPacienteModel,
  deletePacienteModel,
  getPacientePorIdModel,
  updatePacienteModel,
  validate,
  findByEmail,
} = require("../../models/sqlite/paciente.model.js");

class PacientesController {
  async login(req, res, next) {
    //recolecto credenciales
    try {
      const { email, password } = req.body;

      const token = await validate(email, password);

      if (!token) {
        throw new CustomError("Credenciales inválidas", 401);
      }
      //localstorage
      // localStorage.setItem("token", token);

      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }

  async list(req, res, next) {
    try {
      const pacientes = await getPacientesModel();

      if (!pacientes) {
        throw new CustomError("No se encontraron pacientes", 404);
      }

      res.status(200).json(pacientes);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const body = req.body;

      if (!body.dni || !body.nombre || !body.apellido || !body.email) {
        throw new CustomError("Faltan datos en la petición", 400);
      }

      const info = await createPacienteModel(body);
      if (!info) {
        throw new CustomError(
          `Ya existe un paciente con el dni ${body.dni}`,
          400
        );
      }

      return res.status(200).json(info);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const id = req.params.id;

      if (!id) {
        throw new CustomError("Falta el id que se quiere eliminar", 400);
      }
      const pacienteEliminado = await deletePacienteModel(id);

      if (!pacienteEliminado) {
        throw new CustomError(
          `No se encuentra el paciente con el id ${id}`,
          404
        );
      }

      res
        .status(200)
        .json({ message: `Paciente eliminado`, pacienteEliminado });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const id = req.params.id;
      const body = req.body;

      if (!id) {
        return res
          .status(400)
          .json({ message: "Falta el id que se quiere actualizar" });
      }

      /* const pacientePorId = await updatePacienteModel(id, body); */

      if (!body.dni || !body.nombre || !body.apellido || !body.email) {
        return res.status(400).json({ message: "Faltan datos en la peticion" });
      }

      const pacienteActualizado = await updatePacienteModel(id, {
        dni: body.dni,
        email: body.email,
        nombre: body.nombre,
        apellido: body.apellido,
      });

      if (!pacienteActualizado) {
        throw new CustomError(
          `No se encuentra el paciente con el id ${id}`,
          404
        );
      }

      res
        .status(200)
        .json({ message: "Paciente actualizado", pacienteActualizado });
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const pacienteEncontrado = await getPacientePorIdModel(req.params.id);

      if (!pacienteEncontrado) {
        throw new CustomError(
          `No se encuentra el paciente con el id ${req.params.id}`,
          404
        );
      }

      return res.status(200).json(pacienteEncontrado);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PacientesController();
