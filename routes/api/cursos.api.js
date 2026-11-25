const express = require("express");
const { pool } = require("../../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    
    const cursos = await pool.query("SELECT id_curso, id_docente, id_aula, nombre, descripcion, fecha_inicio, fecha_fin, horario, plazas, imagen, estado FROM cursos");
    res.json(cursos);

})

router.post("/buscar", async (req, res) => {
    console.log("A");
    try {

        const name = req.body['name'];

        console.log(name);

        const cursos = await pool.query("SELECT id_curso, id_docente, id_aula, nombre, descripcion, fecha_inicio, fecha_fin, horario, plazas, imagen, estado FROM cursos WHERE cursos.nombre LIKE '%" + name + "%';");

        console.log(cursos);

        res.status(200).json({
            titulo: "Cursos",
            cursos: cursos
        });

    } catch (error) {
        console.error("Error fetching cursos:", error);
        res.status(500).send("Error loading cursos");
    }



})


module.exports = router;