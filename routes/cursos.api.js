const express = require("express");
const { pool } = require("../services/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    const cursos = await pool.query("SELECT * FROM cursos");
    res.json(cursos);
})

module.exports = router;