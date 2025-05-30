const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js')
const {
  verifyTokenMiddleware,
} = require("../middlewares/verifyToken.middleware");
const rutaTurnos = Router();
rutaTurnos.post('/',verifyTokenMiddleware, turnosController.create);
rutaTurnos.get('/',verifyTokenMiddleware, turnosController.getTurnos);
rutaTurnos.get('/:id',verifyTokenMiddleware, turnosController.getByPacienteId);
//rutaTurnos.put('/:id',verifyTokenMiddleware, turnosController.update);
rutaTurnos.delete('/:id',verifyTokenMiddleware, turnosController.deleteTurno);

module.exports = rutaTurnos;