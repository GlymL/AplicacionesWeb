const express = require("express");
const { pool } = require("../../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    // TODO -> recordar cambiar de * a los campos
    const aulas = await pool.query("SELECT * FROM aulas");
    res.json(aulas);
})

module.exports = router;