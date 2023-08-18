const { Sequelize } = require("sequelize");

const DB = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "CrudUsers",
  port: 5432,
  logging: false,
});

module.exports = { DB };
