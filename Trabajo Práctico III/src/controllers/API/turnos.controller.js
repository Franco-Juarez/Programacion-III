const { getPacientePorIdModel } = require("../../models/sqlite/paciente.model");
const {
  createTurnoModel,
  getTurnosPorPacienteModel,
  deleteTurnoModel,
  getTurnosModel,
  updateTurnoModel,
  getTurnoPorIdModel,
} = require("../../models/sqlite/turno.model");
const CustomError = require("../../utils/customError");

class TurnosController {
  async create(req, res, next) {
    try {
      const body = req.body;
      console.log(body);
      if (!body.fecha || !body.hora || !body.idPaciente) {
        throw new CustomError("Faltan datos en la petición", 400);
      }

      const pacienteEncontrado = await getPacientePorIdModel(body.idPaciente);

      if (!pacienteEncontrado) {
        throw new CustomError(
          `No se encuentra el paciente con el id ${body.idPaciente}`,
          404
        );
      }

      const turno = await createTurnoModel(body);

      return res.status(200).json(turno);
    } catch (error) {
      next(error);
    }
  }

  async getByPacienteId(req, res, next) {
    try {
      const id = req.params.id;

      if (!id) {
        throw new CustomError("Falta el id del paciente", 400);
      }

      const turnos = await getTurnosPorPacienteModel(id);

      if (!turnos) {
        throw new CustomError(
          `No se encontraron turnos para el paciente con el id ${id}`,
          404
        );
      }

      return res.status(200).json(turnos);
    } catch (error) {
      next(error);
    }
  }

  async deleteTurno(req, res, next) {
    try {
      const id = req.params.id;

      if (!id) {
        throw new CustomError("Falta el id del turno a eliminar", 400);
      }

      const turnoEliminado = await deleteTurnoModel(id);

      if (!turnoEliminado) {
        throw new CustomError(`No se encuentra el turno con el id ${id}`, 404);
      }

      res.status(200).json({ message: `Turno eliminado`, turnoEliminado });
    } catch (error) {
      next(error);
    }
  }

  async getTurnos(req, res, next) {
    try {
      const turnos = await getTurnosModel();

      if (!turnos || turnos.length === 0) {
        throw new CustomError("No se encontraron turnos", 404);
      }

      return res.status(200).json(turnos);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    //testeo
    console.log("Params:", req.params);
    console.log("Body:", req.body);

    try {
      const id = parseInt(req.params.id);
      const { fecha, hora, idPaciente } = req.body;

      if (!fecha || !hora || !idPaciente) {
        throw new CustomError("Faltan datos en la petición", 400);
      }

      const turnoExistente = await getTurnoPorIdModel(id);
      if (!turnoExistente) {
        throw new CustomError(`No existe un turno con el id ${id}`, 404);
      }

      const paciente = await getPacientePorIdModel(idPaciente);
      if (!paciente) {
        throw new CustomError(
          `No existe un paciente con el id ${idPaciente}`,
          404
        );
      }

      const turnoActualizado = await updateTurnoModel(id, {
        fecha,
        hora,
        idPaciente,
      });

      return res
        .status(200)
        .json({ mensaje: "Turno actualizado", turno: turnoActualizado });
    } catch (error) {
      console.error("Error en update Turno:", error); // <-- agregá esta línea
      next(error);
    }
  }
}

module.exports = new TurnosController();
