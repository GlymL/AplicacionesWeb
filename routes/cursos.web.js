const express = require("express");
const { pool } = require("../services/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("cursos",
        {
            titulo: "Cursos"
        }
    );
});

module.exports = router;