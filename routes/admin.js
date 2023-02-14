const express = require("express");
const adminController = require("../controllers/admin");
const routes = express.Router();

routes.get("/add-exam", adminController.getAddExam);

module.exports = routes;
