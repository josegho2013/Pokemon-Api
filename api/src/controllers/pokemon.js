const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { Sequelize } = require("sequelize");
//const { API_KEY } = process.env;
const { v4: uuidv4 } = require("uuid");

// async function getApiPokemons(req, res, next) {
//   const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1");
//   let apiInfo = apiUrl.data.results.map((e) => axios.get(e.url));

//   try {
//     Promise.all(apiInfo)
//       .then((resp) => {
//         let pokeapi = [];
//         let data = resp.map((i) => i.data);
//         data.map((p) =>
//           pokeapi.push({
//             id: uuidv4(),
//             name: p.name,
//             hp: p.stats[0].base_stat,
//             streght: p.stats[1].base_stat,
//             defense: p.stats[2].base_stat,
//             speed: p.stats[5].base_stat,
//             height: p.height,
//             weight: p.weight,
//             img: p.sprites.other.dream_world.front_default,
//             types: p.types.map((t) => t.type.name),
//           })
//         );

//         res.status(200).send(pokeapi);
//       })
//       .catch((error) => {
//         next(error);
//       });
//   } catch (error) {
//     next(error);
//   }
// }

async function getApiPokemons(req, res, next) {
  const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  let apiInfo = apiUrl.data.results.map((el) => axios.get(el.url));
  
  try {
    // informacion de la api

    Promise.all(apiInfo)
      .then((pokemon) => {
        let apiPokemonMap = pokemon.map((p) => p.data);
        let pokeapi = [];
        apiPokemonMap.map((p) => {
          pokeapi.push({
            id: uuidv4(),
            name: p.name,
            hp: p.stats[0].base_stat,
            attack: p.stats[1].base_stat,
            defense: p.stats[2].base_stat,
            speed: p.stats[5].base_stat,
            height: p.height,
            weight: p.weight,
            img: p.sprites.other.dream_world.front_default,
            types: p.types.map((t) => t.type.name),
          });
        });

        //console.log(apiPokemon,"apiPokemon")

        return res.json(pokeapi);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
}
async function getDbPokemons(req, res, next) {
  try {
    //base de datos
    const dbPokemons = await Pokemon.findAll({
      include: Type,
    });

    return res.status(200).json(dbPokemons);
  } catch (error) {
    next(error);
  }
}

// const results = dbPokemons.concat(apiPokemon)
// return res.json(results)

async function pokemonById(req, res, next) {
  try {
    const { id } = req.params;

    if (id) {
      const pokeId = await Pokemon.findOne({
        where: { id: id },
        include: {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      console.log("pokeId: ", pokeId);

      return res.status(200).send(pokeId);
    } else {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      const infoId = {
        name: data.data.name,
        hp: data.data.stats[0].base_stat,
        attack: data.data.stats[1].base_stat,
        defense: data.data.stats[2].base_stat,
        speed: data.data.stats[5].base_stat,
        height: data.data.height,
        weight: data.data.weight,
        sprite: data.data.sprites.other.dream_world.front_default,
        type: data.data.types.map((e) => e.type.name),
      };
      res.json(infoId);
    }
  } catch (error) {
    console.log(error);
  }
}

async function pokemonCreate(req, res, next) {
  let { name, type, hp, attack, defense, speed, height, weight, fromDb } =
    req.body;

  console.log(name, "nameeee");

  try {
    let newPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      fromDb,
    });

    let typeDb = await Type.findAll({
      where: {
        name: type,
      },
    });
    console.log("typeDb;: ", typeDb);

    newPokemon.addType(typeDb);

    // res.send("¡Pokemon creado exitosamente!");
    return res.status(200).json(newPokemon);
  } catch (error) {
    console.log(error);
  }
}

async function pokeByName(req, res, next) {
  const search = req.query.q;

  try {
    let pokeDB = await Pokemon.findOne({ where: { name: search } });
    if (pokeDB !== null) {
      return res.send(pokeDB);
    } else {
      const pokeApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );

      const pokeData = [
        {
          id: pokeApi.data.id,
          name: pokeApi.data.name,
          img: pokeApi.data.sprites.front_default,
          weight: pokeApi.data.weight,
          height: pokeApi.data.height,
          hp: pokeApi.data.stats[0].base_stat,
          attack: pokeApi.data.stats[1].base_stat,
          defense: pokeApi.data.stats[2].base_stat,
          speed: pokeApi.data.stats[5].base_stat,
          type: pokeApi.data.types[0].type.name,
        },
      ];
      if (pokeApi.data.types.length > 1) {
        pokeData.tipo2 = pokeApi.data.types[1].type.name;
      }
      return res.send(pokeData);
    }
  } catch (e) {
    next(e);
  }
}

async function pokemonUpdate(req, res) {
  const { id } = req.params;
  let { name, type, hp, defense, speed, height, weight, attack, fromDb } =
    req.body;

  try {
    let pokeUpdate = await Pokemon.update(
      {
        name,
        type,
        hp,
        defense,
        speed,
        height,
        weight,
        attack,
        fromDb,
      },
      { where: { id } }
    );

    return res.status(200).send(pokeUpdate);
  } catch (error) {
    return res.send(error);
  }
}

async function pokemonDelete(req, res, next) {
  const id = req.params.id;

  try {
    const operationsId = await Pokemon.destroy({
      where: { id },
    });

    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).send("You Cannot Delete pokemon!");
  }
}

module.exports = {
  getDbPokemons,
  getApiPokemons,
  pokemonById,
  pokeByName,
  pokemonCreate,
  pokemonUpdate,
  pokemonDelete,
};
