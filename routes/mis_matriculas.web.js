const express = require("express");
const { pool } = require("../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("mis_matriculas",
        {
            titulo: "Mis matriculas",
            css:"mis_matriculas.css",
            js: null
        }
    );
});

module.exports = router;