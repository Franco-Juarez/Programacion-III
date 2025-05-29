const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js')
const rutaTurnos = Router();
rutaTurnos.post('/',turnosController.create);
// rutaTurnos.get('/', turnosController.list);
rutaTurnos.get('/:id', turnosController.getByPacienteId);
// rutaTurnos.put('/:id',turnosController.update);
rutaTurnos.delete('/:id',turnosController.deleteTurno);

module.exports = rutaTurnos;