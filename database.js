const mariadb = require('mariadb');

const db = async () => {
    try {
        const conn = await mariadb.createConnection({ 
            user: process.env.DB_USER, 
            password: process.env.DB_PASSWORD, 
            port: 3306,
            database: 'aw',
            metaAsArray: false,
            ssl: false,
            dateStrings: true  
      });

      console.log("Conectado a la Base de datos de MariaDB en http://localhos:3306");
    }catch (error){
        console.error("No hay MariaDB error:", error.message)
        process.exit(1);
    }
}

module.exports = db;