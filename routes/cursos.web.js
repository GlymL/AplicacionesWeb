const express = require("express");
const { pool } = require("../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
     try {

        const cursos = await pool.query("SELECT id_curso, id_docente, id_aula, nombre, descripcion, fecha_inicio, fecha_fin, horario, plazas, imagen, estado FROM cursos WHERE estado = 'activo'");


        res.status(200).render("cursos", {
            titulo: "Cursos",
            css: "cursos.css",
            js: "cursos.js",
            cursos: cursos
        });

    } catch (error) {
        console.error("Error fetching cursos:", error);
        res.status(500).send("Error loading cursos");
    }
});




module.exports = router;