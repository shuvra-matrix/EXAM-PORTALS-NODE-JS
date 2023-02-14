const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const addExam = sequelize.define("exam", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  exam: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});

module.exports = addExam;
