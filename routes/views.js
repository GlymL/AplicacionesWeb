const express = require("express");
const router = express.Router();

/*
    Este archivo es temporal para cuando vayamos haciendo cada una de las rutas.
*/

router.get("/", async (req, res) => {
    res.status(200).render("index");
});

module.exports = router;