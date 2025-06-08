const { Router } = require('express');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');
const adminController = require('../controllers/API/admin.controller.js');
const turnosController = require('../controllers/API/turnos.controller.js');
const rutaAdmin = Router();

const validate = require('../middlewares/validacionTurno.middleware.js');
const adminSchema = require('../schemas/admin.schema.js');

rutaAdmin.post('/login', validate(adminSchema.login, "body"),adminController.login)
rutaAdmin.post('/', adminController.create);
rutaAdmin.get('/', verifyTokenMiddleware,adminController.getAdmins);

rutaAdmin.post('/turnos', verifyTokenMiddleware, turnosController.create);
rutaAdmin.get('/turnos', verifyTokenMiddleware, turnosController.getTurnos);
rutaAdmin.get('/turnos/:id', verifyTokenMiddleware, turnosController.getByPacienteId);
rutaAdmin.delete('/turnos/:id', verifyTokenMiddleware, turnosController.deleteTurno);


module.exports = rutaAdmin;