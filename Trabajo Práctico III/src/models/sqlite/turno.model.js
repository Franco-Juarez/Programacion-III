const { Turno } = require("../sqlite/entities/index.js");

async function getTurnosModel() {
  const turnos = await Turno.findAll();
  return turnos;
}

async function createTurnoModel(turno) {
  const turnoCreado = await Turno.create(turno);
  console.log("Turnito", turnoCreado);
  return turnoCreado;
}

async function getTurnosPorPacienteModel(id) {
  const turnos = await Turno.findAll({
    where: {
      idPaciente: id,
    },
  });
  return turnos;
}

async function deleteTurnoModel(id) {
  const turnoEliminado = await Turno.findByPk(id);

  if (!turnoEliminado) {
    return null;
  }

  await turnoEliminado.destroy();
  return turnoEliminado;
}

async function updateTurnoModel(id, data) {
  const turno = await Turno.findByPk(id);

  if (!turno) {
    return null;
  }

  await turno.update(data);
  return turno;
}

async function getTurnoPorIdModel(id) {
  return await Turno.findByPk(id);
}

module.exports = {
  getTurnosModel,
  createTurnoModel,
  getTurnosPorPacienteModel,
  deleteTurnoModel,
  getTurnoPorIdModel,
  updateTurnoModel,
};
