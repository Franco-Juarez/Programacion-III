const { sequelize } = require("../config/db.js");
const { DataTypes } = require("sequelize");

const Turno = sequelize.define("Turno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: DataTypes.DATEONLY,
  hora: DataTypes.TIME,
  idPaciente: DataTypes.INTEGER,
});

module.exports = Turno;
