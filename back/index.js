// instancia de express : sirve para crear api rest
const express = require("express");
// activamos cors
const cors = require("cors");
// instanciamos la conexion a la bd

const app = express(); // invocamos el metodo constructor de la clase express

/* let permitidas = {
  origin: "http://127.0.0.1:5500"
}; */

app.use(cors());
app.use(express.json()); // serializar los request y response

app.use("/", require("./src/aprendiz.js"));

app.listen(4100, () => {
  console.log(`Api rest encendida en el puerto 4100`);
});

// PRINCIPIO DISEÑO SRP :
