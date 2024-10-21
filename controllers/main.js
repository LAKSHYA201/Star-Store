const { get } = require("express/lib/response");
const db = require("../db/queries");

async function getCategoriesNames(req, res) {
  let categories = await db.fetchTableNames();
  res.render("home", { categories: categories });
}
async function getAircraftItems(req, res) {
  let categories = await db.fetchTableNames();
  let aircrafts = await db.fetchAircrafts();
  let images = await db.fetchAircraftImages();
  res.render("aircraftItems", {
    categories: categories,
    aircrafts: aircrafts,
    images: images,
  });
}

async function getMovieItems(req, res) {
  let categories = await db.fetchTableNames();
  let movies = await db.fetchMovies();
  let images = await db.fetchMovieImages();
  res.render("movieItems", {
    categories: categories,
    movies: movies,
    images: images,
  });
}

async function getDeviceItems(req, res) {
  let categories = await db.fetchTableNames();
  let devices = await db.fetchDevices();
  let images = await db.fetchDeviceImages();
  res.render("deviceItems", { categories, devices, images });
}

async function getAddAircraft(req, res) {
  let categories = await db.fetchTableNames();
  res.render("addAircraft", { categories: categories });
}
module.exports = {
  getCategoriesNames,
  getAircraftItems,
  getMovieItems,
  getDeviceItems,
  getAddAircraft,
};
