const axios = require("axios");
const { Type } = require("../db");

async function getTypes(req, res, next) {
  try {
    const apiUrl = await axios.get("https://pokeapi.co/api/v2/type");
    apiUrl.data.results.forEach((item) => {
      Type.findOrCreate({ where: { name: item.name } });
    });
    let response = await Type.findAll();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTypes,
};
