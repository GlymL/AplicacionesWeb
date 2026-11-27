const express = require("express");
const { pool } = require("../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("accesibilidad",
        {
            titulo: "Accesibilidad",
            css: "accesibilidad.css",
            js: null
        }
    );
});

module.exports = router;