const { Router } = require("express");
const pacientesController = require("../controllers/API/pacientes.controller.js");
const {
  verifyTokenMiddleware,
} = require("../middlewares/verifyToken.middleware.js");
const rutaPacientes = Router();

const validate = require("../middlewares/validacionTurno.middleware.js");
const pacienteSchema = require("../schemas/paciente.schema.js");

rutaPacientes.get("/", verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post(
  "/login",
  validate(pacienteSchema.login, "body"),
  pacientesController.login
);
rutaPacientes.get(
  "/:id",
  verifyTokenMiddleware,
  validate(pacienteSchema.getById, "params"),
  pacientesController.getById
);
rutaPacientes.post(
  "/",
  verifyTokenMiddleware,
  validate(pacienteSchema.create, "body"),
  pacientesController.create
);
rutaPacientes.put(
  "/:id",
  verifyTokenMiddleware,
  validate(pacienteSchema.getById, "params"),
  validate(pacienteSchema.update, "body"),
  pacientesController.update
);
rutaPacientes.delete(
  "/:id",
  verifyTokenMiddleware,
  validate(pacienteSchema.getById, "params"),
  pacientesController.delete
);

//Otras rutas CRUD

module.exports = rutaPacientes;
