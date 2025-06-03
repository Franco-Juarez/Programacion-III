const {Router} = require('express');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const adminController = require('../controllers/API/admin.controller.js');
const rutaAdmin = Router();

rutaAdmin.post('/login',adminController.login)
rutaAdmin.post('/',adminController.create);
// rutaAdmin.get('/', verifyTokenMiddleware, pacientesController.list);
// rutaAdmin.get('/:id',verifyTokenMiddleware,pacientesController.getById);
// rutaAdmin.put('/:id',verifyTokenMiddleware,pacientesController.update);
// rutaAdmin.delete('/:id',verifyTokenMiddleware,pacientesController.delete);



module.exports = rutaAdmin;