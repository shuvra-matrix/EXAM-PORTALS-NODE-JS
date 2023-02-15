const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const addQuestion = sequelize.define("question", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  opi: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  opii: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  opiii: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  opiv: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ans: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = addQuestion;
