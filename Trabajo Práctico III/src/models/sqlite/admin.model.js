const Admin = require("./entities/admin.entity");
const Config = require("../../config/config.js");
const jwt = require("jsonwebtoken");

async function createAdminModel(admin) {
  const adminCreado = await Admin.create(admin);
  return adminCreado;
}

async function getAdminModel() {
  const users = await Admin.findAll();
  return users;
}

async function findByEmail(email, password) {
  const pacientes = await getAdminModel();
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
    throw new Error("Email o contraseña incorrectos");
  }

  //payload, secreto, tiempo de expiracion
  const payload = {
    userId: userFound._id,
    userEmail: userFound.email,
  };
  // console.log("palabra secreta, pacientes model:", Config.secreteWord);

  const token = jwt.sign(payload, Config.secreteWord, {
    expiresIn: Config.expiresIn,
  });
  return token;
}

module.exports = {
  createAdminModel,
  getAdminModel,
  validate,
};
