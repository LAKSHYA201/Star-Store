const express = require("express");
const app = express();
const path = require("node:path");
const assetPath = path.join(__dirname, "public");
const { dataBaseCheck } = require("./db/queries");
const controllers = require("./controllers/main");
app.use(express.static(assetPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", controllers.getCategoriesNames);

app.get("/aircrafts", (req, res) => {
  res.send("aircraft page");
});
app.get("/movies", (req, res) => {
  res.send("movies");
});
app.get("/devices", (req, res) => {
  res.send("devices");
});

app.listen(3000, () => {
  console.log("Port 3000");
});
