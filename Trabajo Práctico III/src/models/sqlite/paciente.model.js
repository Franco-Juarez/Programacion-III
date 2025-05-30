const { Paciente, Turno } = require("../sqlite/entities/index.js");

async function getPacientesModel() {
  const users = await Paciente.findAll();
  return users;
}

async function getPacientePorIdModel(id) {
  const paciente = await Paciente.findByPk(id, {
    include: {
      model: Turno,
      as: "turnos",
    },
  });
  return paciente;
}

async function createPacienteModel(paciente) {
  const info = await Paciente.create(paciente);
  return info;
}

async function deletePacienteModel(id) {
  const paciente = await Paciente.findByPk(id);

  if (!paciente) {
    return null;
  }
  
  await paciente.destroy();
  return paciente;
}

async function updatePacienteModel(id, paciente) {
  const pacientePorId = await Paciente.findByPk(id);

  if (!pacientePorId) {
    return null;
  }
  await pacientePorId.update({
    dni: paciente.dni,
    email: paciente.email,
    nombre: paciente.nombre,
    apellido: paciente.apellido,
  });
  return paciente;
}

//TODO: agregar operaciones CRUD

module.exports = {
  getPacientesModel,
  createPacienteModel,
  deletePacienteModel,
  getPacientePorIdModel,
  updatePacienteModel,
};
