const express = require("express");
const { pool } = require("../../DB/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    const query = req.query;

    if( query['name'] == undefined ){
        const docentes = await pool.query("SELECT id_docente, nombre, email, especialidad, telefono, foto, activo FROM docentes");
        res.json(docentes);
    }
    else{
        try {

            const name = query['name'];

            const docentes = await pool.query("SELECT id_docente, nombre, email, especialidad, telefono, foto, activo FROM docentes WHERE nombre LIKE ?", [`${name} %`]);
        

            if( docentes )
            res.status(200).json({
                titulo: "Docentes",
                docentes: docentes
            });

        } catch (error) {
            console.error("Error fetching docentes:", error);
            res.status(500).send("Error loading docentes");
        }
    }
})

module.exports = router;