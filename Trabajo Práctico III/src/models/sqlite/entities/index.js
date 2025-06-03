const Paciente = require("./paciente.entity.js");
const Turno = require("./turno.entity.js");

Paciente.hasMany(Turno, {
  foreignKey: "idPaciente",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  as: "turnos",
});
Turno.belongsTo(Paciente, {
  foreignKey: "idPaciente",
  as: "paciente",
});

module.exports = { Paciente, Turno };
