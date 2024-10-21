const express = require("express");
const app = express();
const path = require("node:path");
const assetPath = path.join(__dirname, "/public");
const { dataBaseCheck } = require("./db/queries");
const controllers = require("./controllers/main");
app.use(express.static(assetPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", controllers.getCategoriesNames);

app.get("/aircrafts", controllers.getAircraftItems);
app.get("/movies", controllers.getMovieItems);
app.get("/devices", controllers.getDeviceItems);
app.get("/aircrafts/add", controllers.getAddAircraft);

app.listen(3000, () => {
  console.log("Port 3000");
});
