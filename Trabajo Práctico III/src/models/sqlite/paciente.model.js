const { Paciente, Turno } = require("../sqlite/entities/index.js");
const Config = require("../../config/config.js");
const jwt = require("jsonwebtoken");

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
  const pacienteExiste = await Paciente.findOne({
    where: {
      dni: paciente.dni,
    },
  });
  if (pacienteExiste) {
    return null;
  }

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
    password: paciente.password,
  });
  return paciente;
}

async function findByEmail(email, password) {
  const pacientes = await getPacientesModel();
  const pacienteEncontrado = await pacientes.find(
    (p) => p.email === email && p.password === password
  );
  if (pacienteEncontrado === null) {
    throw new Error("el paciente no existe");
  }
  return pacienteEncontrado;
}

async function validate(email, password) {
  const userFound = await findByEmail(email, password);

  if (!userFound || userFound.password == null) {
    throw new Error("wrong email or password");
  }

  //payload, secreto, tiempo de expiracion
  const payload = {
    userId: userFound._id,
    userEmail: userFound.email,
  };
  console.log("palabra secreta, pacientes model:", Config.secreteWord);

  const token = jwt.sign(payload, Config.secreteWord, {
    expiresIn: Config.expiresIn,
  });
  return token;
}

//TODO: agregar operaciones CRUD

module.exports = {
  getPacientesModel,
  createPacienteModel,
  deletePacienteModel,
  getPacientePorIdModel,
  updatePacienteModel,
  findByEmail,
  validate,
};
