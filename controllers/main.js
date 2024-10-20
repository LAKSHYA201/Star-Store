const { get } = require("express/lib/response");
const db = require("../db/queries");

async function getCategoriesNames(req, res) {
  let categories = await db.fetchTableNames();
  res.render("home", { categories: categories });
}

module.exports = {
  getCategoriesNames,
};
