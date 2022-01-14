const { Router } = require('express');
const router = Router();
const RouterPokemon = require("./pokemon");
const RouterType = require("./type");

router.use("/pokemon", RouterPokemon);
router.use("/type", RouterType );


module.exports = router;
