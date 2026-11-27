const express = require("express");
const { pool } = require("../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("docentes",
        {
            titulo: "Docentes",
            css: "docentes.css",
            js: null
        }
    );
});

module.exports = router;