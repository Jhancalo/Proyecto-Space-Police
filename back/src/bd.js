/*conexion a la base de datos*/
// instanciar la libreria mysql

const mysql = require("mysql2"); // principio de inmutabilidad

// cadena de conexion o string de conexion

const cnx = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

cnx.connect((error) => {
  if (error) {
    console.log(`Error en la conexion: \n ${error}`);
    //throw "error en la conexion a la BD.";
  } else {
    console.log("conexion exitosa a la BD!");
  }
});

module.exports = cnx;
