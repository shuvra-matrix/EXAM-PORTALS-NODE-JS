const express = require("express");
const routes = express.Router();
const publicController = require("../controllers/public");

routes.get("/", publicController.indexPage);

module.exports = routes;
