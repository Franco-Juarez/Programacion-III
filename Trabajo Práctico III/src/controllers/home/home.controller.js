const { getTurnosModel } = require("../../models/sqlite/turno.model");
const { getPacientesModel } = require("../../models/sqlite/paciente.model");

const home = async (req, res) => {
  try {
    const turnos = await getTurnosModel();
    const pacientesConAdm = await getPacientesModel();
  
    const pacientes = pacientesConAdm.filter(
      (paciente) => paciente.dni !== "00000000"
    );

    res
      .render("index", {
        title: "Sistema de turnos",
        turnos,
        pacientes,
      })
  } catch (error) {
    res.render("index", {
      title: "Sistema de turnos",
      turnos: [],
      pacientes: [],
      error: "No se pudieron obtener los turnos",
    });
  }
};
module.exports = {
  home,
};
