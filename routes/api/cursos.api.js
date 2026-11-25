const express = require("express");
const { pool } = require("../../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    
    const cursos = await pool.query("SELECT id_curso, id_docente, id_aula, nombre, descripcion, fecha_inicio, fecha_fin, horario, plazas, imagen, estado FROM cursos");
    res.json(cursos);
})

router.post("/", async (req, res) => {
    const { name, desc, time, cap } = req.body;

    console.log(name, desc, time, cap);

    const cursos = await pool.query("SELECT id_curso, id_docente, id_aula, nombre, descripcion, fecha_inicio, fecha_fin, horario, plazas, imagen, estado FROM cursos WHERE cursos.nombre LIKE '%" + name + "%';");

    res.status(200).json(cursos);
});


module.exports = router;