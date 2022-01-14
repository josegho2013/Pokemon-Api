const axios = require("axios");
const { Dog, Temperaments } = require("../db");
const { v4: uuidv4 } = require("uuid");



async function getAllpokemon(req, res, next) {
    try {
      const apiUrl = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/`
      );
      
      let apiInfo = await apiUrl.data.map((el) => {
        return {
          id: el.id,
          name: el.name,
          image:el.sprites.front_shiny,
          hp:el.hp,
          attack:el.attack,
          defense:el. defense,
          speed: el.speed,
          height:el.height,
          weight:el.weight,
          temperaments: el.temperament
            ? el.temperament.split(", ").map((a) => {
                return { name: a };
              })
            : [],
        };
      });
  
      let dataBase = await Dog.findAll({
        attributes: ["id", "name", "weight", "life_span", "image"],
        include: [
          {
            attributes: ["name"],
            model: Temperaments,
            through: {
              attributes: [],
            },
          },
        ],
      });
  
      let response = dataBase.concat(apiInfo);
      // let response = apiInfo.concat(dataBase);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  


  module.exports = {
    getAllpokemon
  };
  