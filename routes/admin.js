const express = require("express");
const adminController = require("../controllers/admin");
const routes = express.Router();

routes.get("/add-exam", adminController.getAddExam);
routes.post("/add-exam", adminController.postAddExam);

module.exports = routes;
