const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("exam-db", "root", "ASas12@#", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
