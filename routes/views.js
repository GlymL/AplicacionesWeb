const express = require("express");
const router = express.Router();

/*
    Este archivo es temporal para cuando vayamos haciendo cada una de las rutas.
*/

router.get("/", async (req, res) => {
    res.status(200).render("index");
});

router.get("/docentes", async (req, res) => {
    res.status(200).render("docentes",
        {
            titulo: "Docentes"
        }
    );
});

router.get("/aulas", async (req, res) => {
    res.status(200).render("aulas",
        {
            titulo: "Aulas"
        }
    );
});

router.get("/matriculas", async (req, res) => {
    res.status(200).render("mis_matriculas",
        {
            titulo: "Mis matriculas"
        }
    );
});

router.get("/accesibilidad", async (req, res) => {
    res.status(200).render("accesibilidad",
        {
            titulo: "Accesibilidad"
        }
    );
});

router.get("/administracion", async (req, res) => {
    res.status(200).render("administracion",
        {
            titulo: "Administracion"
        }
    );
});

router.get("/signup", async (req, res) => {
    res.status(200).render("signup",
        {
            titulo: "Signup"
        }
    );
});

router.get("/login", async (req, res) => {
    res.status(200).render("login",
        {
            titulo: "Login"
        }
    );
});

module.exports = router;