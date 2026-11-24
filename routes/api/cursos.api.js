const express = require("express");
const { pool } = require("../../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    // TODO -> recordar cambiar de * a los campos
    const cursos = await pool.query("SELECT * FROM cursos");
    res.json(cursos);
})

module.exports = router;