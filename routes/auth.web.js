const express = require("express");
const { pool } = require("../DB/mariadb");
const router = express.Router();

/*router.get("/signup", async (req, res) => {
    res.status(200).render("signup",
        {
            titulo: "Signup"
        }
    );
});*/

router.get("/login", async (req, res) => {
    res.status(200).render("login",
        {
            titulo: "Login"
        }
    );
});

router.post("/login", async (req, res) => {
    try{
        const { email, password } = req.body;

        const rows = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);

        if (rows.length != 1) {
            return res.status(401).json({ 
                ok: false,
                error: "Email o contraseña son incorrectas"
            });
        }

        const user = rows[0];

        if(user.password !== password){
            return res.status(401).json({ 
                ok: false, 
                error: "Email o contraseña son incorrectas"
             });
        }

        if(user.activo == 0){
            return res.status(401).json({ 
                ok: false, 
                error: "El usuario esta inactivo"
             });;
        }
        
        // Guardamos en la sesion
        req.session.user = {
        id: user.id_usuario,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol
        };

        return res.status(200).json({ ok: true, redirect: "/" });
    } catch (error) {
        console.error("Error en el login:", error);
        return res.status(500).json({ ok: false, error: "Error interno del servidor" });
    }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;