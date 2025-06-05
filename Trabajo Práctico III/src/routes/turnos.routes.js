const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js')
const {
  verifyTokenMiddleware,
} = require("../middlewares/verifyToken.middleware");
const validate = require('../middlewares/validacionTurno.middleware.js');
const turnoSchema = require('../schemas/turno.schema.js');

const rutaTurnos = Router();

rutaTurnos.post('/',verifyTokenMiddleware, validate(turnoSchema.create) ,turnosController.create);
rutaTurnos.get('/',verifyTokenMiddleware, turnosController.getTurnos);
rutaTurnos.get('/:id',verifyTokenMiddleware, validate(turnoSchema.idParam, 'params') ,turnosController.getByPacienteId);
rutaTurnos.put('/:id',verifyTokenMiddleware, validate(turnoSchema.idParam, 'params'), validate(turnoSchema.update),turnosController.update);
rutaTurnos.delete('/:id',verifyTokenMiddleware, validate(turnoSchema.idParam, 'params'),turnosController.deleteTurno);

module.exports = rutaTurnos;