const { Router } = require("express");
const router = Router();
const {
  getApiPokemons,
  getDbPokemons,
  pokeByName,
  pokemonById,
  pokemonCreate,
  pokemonUpdate,
  pokemonDelete,
} = require("../controllers/pokemon");

router.get("/api", getApiPokemons);
router.get("/db", getDbPokemons);
router.get("/search", pokeByName);
router.get("/pokemonDetail/:id", pokemonById);
router.post("/pokemonCreate", pokemonCreate);
router.put("/pokemonUpdate/:id", pokemonUpdate);
router.delete("/pokemonDelete/:id", pokemonDelete);

module.exports = router;
