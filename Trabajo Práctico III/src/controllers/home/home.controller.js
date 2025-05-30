const { getTurnosModel } = require("../../models/sqlite/turno.model.js"); // Ajusta el path si es necesario

const home = async (req, res) => {
    try {
        const turnos = await getTurnosModel();
        res.render('index', { 
            title: 'Sistema de turnos',
            turnos
        });
    } catch (error) {
        res.render('index', { 
            title: 'Sistema de turnos',
            turnos: [],
            error: 'No se pudieron obtener los turnos'
        });
    }
}
module.exports = {
   home
}



