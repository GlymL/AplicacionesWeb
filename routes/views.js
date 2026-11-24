const express = require("express");
const router = express.Router();

/*
    Este archivo es temporal para cuando vayamos haciendo cada una de las rutas.
*/

router.get("/", async (req, res) => {
    res.status(200).render("index");
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