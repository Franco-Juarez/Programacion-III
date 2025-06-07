const { Router } = require('express');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');
const adminController = require('../controllers/API/admin.controller.js');
const turnosController = require('../controllers/API/turnos.controller.js');
const rutaAdmin = Router();

rutaAdmin.post('/login', adminController.login)
rutaAdmin.post('/', adminController.create);
rutaAdmin.get('/', adminController.getAdmins);

rutaAdmin.post('/turnos', verifyTokenMiddleware, turnosController.create);
rutaAdmin.get('/turnos', verifyTokenMiddleware, turnosController.getTurnos);
rutaAdmin.get('/turnos/:id', verifyTokenMiddleware, turnosController.getByPacienteId);
rutaAdmin.delete('/turnos/:id', verifyTokenMiddleware, turnosController.deleteTurno);


module.exports = rutaAdmin;