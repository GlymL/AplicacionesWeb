const express = require("express");
const { pool } = require("../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
     try {
        const response = await fetch("http://localhost:3000/api/cursos");

        const cursos = await response.json();

        res.status(200).render("cursos", {
            titulo: "Cursos",
            cursos: cursos
        });

    } catch (error) {
        console.error("Error fetching cursos:", error);
        res.status(500).send("Error loading cursos");
    }
});




module.exports = router;