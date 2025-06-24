// backend/models/index.js
const { Sequelize } = require("sequelize");
const config = require("../config/database");


const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool,
    dialectOptions: dbConfig.dialectOptions,
  }
);
const Libro = require("./libro")(sequelize, Sequelize.DataTypes);
const Comentario = require("./comentario")(sequelize, Sequelize.DataTypes);

const models = {
  Libro,
  Comentario,
  sequelize,
  Sequelize,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
