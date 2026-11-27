const express = require("express");
const { pool } = require("../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
     try {

        const docentes = await pool.query("SELECT id_docente, nombre, email, especialidad, telefono, foto, activo FROM docentes");
        
        
        res.status(200).render('docentes', {
            titulo: "Docentes",
            css: "docentes.css",
            js: "docentes.js",
            docentes: docentes
        });

    } catch (error) {
        console.error("Error fetching docentes:", error);
        res.status(500).send("Error loading docentes");
    }
});

module.exports = router;