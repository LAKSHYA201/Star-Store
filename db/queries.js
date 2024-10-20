const pool = require("./pool");

async function fetchTableNames() {
  let { rows } = await pool.query(
    "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
  );
  return rows;
}

module.exports = { fetchTableNames };
