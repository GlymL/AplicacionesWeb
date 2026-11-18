const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("index");
});

router.get("/cursos", async (req, res) => {
    res.status(200).render("cursos");
});

router.get("/docentes", async (req, res) => {
    res.status(200).render("docentes");
});

router.get("/aulas", async (req, res) => {
    res.status(200).render("aulas");
});

router.get("/matriculas", async (req, res) => {
    res.status(200).render("mis_matriculas");
});

router.get("/accesibilidad", async (req, res) => {
    res.status(200).render("accesibilidad");
});

router.get("/administracion", async (req, res) => {
    res.status(200).render("administracion");
});

module.exports = router;