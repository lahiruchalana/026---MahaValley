const express = require("express");
const createVegetable = require("../controllers/vegetableController");

var router = express.Router();

router.route("/")
    .post(createVegetable)

module.exports = router;