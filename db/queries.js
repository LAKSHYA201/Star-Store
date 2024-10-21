const pool = require("./pool");

async function fetchTableNames() {
  let { rows } = await pool.query(
    "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
  );
  return rows;
}
async function fetchAircrafts() {
  let { rows } = await pool.query("SELECT name FROM aircrafts;");
  return rows;
}
async function fetchAircraftImages() {
  let { rows } = await pool.query("SELECT img FROM aircrafts;");
  return rows;
}
async function fetchMovies() {
  let { rows } = await pool.query("SELECT name FROM movies;");
  return rows;
}
async function fetchMovieImages() {
  let { rows } = await pool.query("SELECT img FROM movies;");
  return rows;
}
async function fetchDevices() {
  let { rows } = await pool.query("SELECT name FROM devices;");
  return rows;
}
async function fetchDeviceImages() {
  let { rows } = await pool.query("SELECT img FROM devices;");
  return rows;
}

module.exports = {
  fetchTableNames,
  fetchAircrafts,
  fetchAircraftImages,
  fetchMovies,
  fetchMovieImages,
  fetchDeviceImages,
  fetchDevices,
};
