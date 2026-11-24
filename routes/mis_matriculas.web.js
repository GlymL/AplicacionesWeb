const express = require("express");
const { pool } = require("../services/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("mis_matriculas",
        {
            titulo: "Mis matriculas"
        }
    );
});

module.exports = router;