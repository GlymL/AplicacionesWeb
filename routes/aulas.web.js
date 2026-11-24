const express = require("express");
const { pool } = require("../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("aulas",
        {
            titulo: "Aulas"
        }
    );
});

module.exports = router;