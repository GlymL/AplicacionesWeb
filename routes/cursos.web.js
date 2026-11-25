const express = require("express");
const { pool } = require("../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
     try {
        const response = await fetch("http://localhost:3000/api/cursos");

        const cursos = await response.json();

        console.log(cursos);

        res.status(200).render("cursos", {
            titulo: "Cursos",
            cursos: cursos
        });

    } catch (error) {
        console.error("Error fetching cursos:", error);
        res.status(500).send("Error loading cursos");
    }
});


router.post("/", async (req, res) => {
    try {
        const { name, desc, time, cap } = req.body;

        console.log(name, desc, time, cap);

        const cursos = await pool.query("SELECT id_curso, id_docente, id_aula, nombre, descripcion, fecha_inicio, fecha_fin, horario, plazas, imagen, estado FROM cursos WHERE cursos.nombre LIKE '%" + name + "%';");

        console.log(cursos);

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