const { Router } = require("express");
const router = Router();
const {
  getAllPokemon,
  getpokemonApi,
  getpokemonDb,
  searchByName,
  getPokemonById,
  pokemonCreate,
  pokemonUpdate,
  pokemonDelete,
} = require("../controllers/pokemon");

router.get("/", getAllPokemon);
router.get("/api", getpokemonApi);
router.get("/db", getpokemonDb);
router.get("/search", searchByName);
router.get("/pokemonDetail/:id", getPokemonById);
router.post("/pokemonCreate", pokemonCreate);
router.put("/pokemonUpdate/:id", pokemonUpdate);
router.delete("/pokemonDelete/:id", pokemonDelete);

module.exports = router;
