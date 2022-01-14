const { Router } = require("express");
const router = Router();
const { getTypes } = require("../controllers/Type");

router.get("/", getTypes);

module.exports = router;