const db = require('mariadb');

// 1. Creamos el pool UNA SOLA VEZ fuera de la función
const pool = db.createPool({ 
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    metaAsArray: false,
    ssl: false,
    dateStrings: true
});

// 2. Tu función solo comprueba la conexión al arrancar
const mariadbConnect = async () => {
    try {
        const conn = await pool.getConnection();
        console.log("Conectado a la Base de datos de MariaDB en http://localhost:3306");
        conn.release();
    } catch (error) {
        console.error("No hay MariaDB error:", error.message);
        process.exit(1);
    }
};

// 3. Exportamos ambos: la función para index.js y el pool para las rutas
module.exports = { pool, mariadbConnect };