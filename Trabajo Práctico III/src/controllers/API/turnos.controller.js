const { getPacientePorIdModel } = require("../../models/sqlite/paciente.model");
const { createTurnoModel, getTurnosPorPacienteModel, deleteTurnoModel } = require("../../models/sqlite/turno.model");
const CustomError = require("../../utils/customError");

class TurnosController {
  async create(req, res, next) {
    try {
      const body = req.body;
        console.log(body)
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

  async obtenerTurnos(req, res, next) {
      try {
        const { getTurnosModel } = require("../../models/sqlite/turno.model");
        const turnos = await getTurnosModel();
        res.status(200).json(turnos);
      } catch(error) {
        next(error);
      }
  }

  async deleteTurno(req, res, next){
    try{
      const id = req.params.id;

      if (!id) {
        throw new CustomError("Falta el id del turno a eliminar", 400);
      }

      const turnoEliminado = await deleteTurnoModel(id);

      if (!turnoEliminado) {
        throw new CustomError(
          `No se encuentra el turno con el id ${id}`,
          404
        );
      }

      res.status(200).json({ message: `Turno eliminado`, turnoEliminado });
    }catch(error) {
      next(error);
    }
  }
}


module.exports = new TurnosController();
