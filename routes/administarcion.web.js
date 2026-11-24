const express = require("express");
const { pool } = require("../../services/mariadb");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("administarcion",
        {
            titulo: "Administarcion"
        }
    );
});

module.exports = router;