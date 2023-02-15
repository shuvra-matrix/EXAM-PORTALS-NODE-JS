const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const examQuestion = sequelize.define("examquestion", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
});

module.exports = examQuestion;
