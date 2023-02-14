const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require("./util/root-path");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const publicRoutes = require("./routes/public");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(publicRoutes);

app.listen(3030);
