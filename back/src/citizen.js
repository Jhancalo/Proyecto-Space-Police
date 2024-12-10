const express = require("express");
const bd = require("./bd.js");
const aprendiz = express();

//rutas con consulta  a la base de datos
aprendiz.get("/api/citizen/listartodos", (req, res) => {
  // hacemos la consulta
  let consulta = "SELECT * FROM citizen order by apellido asc";
  bd.query(consulta, (error, aprendiz) => {
    if (error) {
      res.send({
        status: "error",
        mensaje: "ocurrio un error en la consulta !",
        error: error
      });
    } else {
      res.send({
        status: "ok",
        mensaje: "consulta exitosa",
        aprendiz: aprendiz
      });
    }
  });
});

// listar por id
aprendiz.get("/api/aprendiz/listarporid/:id", (req, res) => {
  // recibimos el parametro
  let id = req.params.id; // express : request  params: extrae parametro de la peticion = id

  // hacemos la consulta
  let consulta = "SELECT * FROM citizen where id = ? ";

  bd.query(consulta, [id], (error, aprendiz) => {
    if (error) {
      res.send({
        status: "error",
        mensaje: "ocurrio un error en la consulta !",
        error: error
      });
    } else {
      res.send({
        status: "ok",
        mensaje: "consulta exitosa",
        aprendiz: aprendiz
      });
    }
  });
});

//consulta por apellido

aprendiz.get("/api/citizen/listarporapellido/:apellido", (req, res) => {
  // recibimos el parametro
  let apellido = req.params.apellido; // express : request  params: extrae parametro de la peticion = id

  // hacemos la consulta
  let consulta = "SELECT * FROM citizen where apellido  = ? ";

  bd.query(consulta, [apellido], (error, aprendiz) => {
    if (error) {
      res.send({
        status: "error",
        mensaje: "ocurrio un error en la consulta !",
        error: error
      });
    } else {
      res.send({
        status: "ok",
        mensaje: "consulta exitosa",
        aprendiz: aprendiz
      });
    }
  });
});
// eliminar un aprendiz
aprendiz.delete("/api/citizen/borrarporid/:id", (req, res) => {
  // recibimos el parametro
  let id = req.params.id; // express : request  params: extrae parametro de la peticion = id

  // hacemos la consulta
  let consulta = "DELETE  FROM citizen where id = ? ";

  bd.query(consulta, [id], (error, aprendiz) => {
    if (error) {
      res.send({
        status: "error",
        mensaje: "ocurrio un error en la consulta !",
        error: error
      });
    } else {
      res.send({
        status: "ok",
        mensaje: "Registro Borrado con exito !",
        aprendiz: aprendiz
      });
    }
  });
});

// crear un aprendiz  : usa el metodo post

aprendiz.post("/api/citizen/crear", (req, res) => {
  // recibimos la data enviada desde el formulario

  let frmDatos = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password
  };
  // hacemos la consulta
  let consulta = "INSERT INTO aprendiz SET ?";
  bd.query(consulta, [frmDatos], (error, respuesta) => {
    if (error) {
      res.send({
        status: "error",
        mensaje: "ocurrio un error en la consulta !",
        error: error
      });
    } else {
      res.send({
        status: "ok",
        mensaje: "inserción exitosa",
        respuesta: respuesta
      });
    }
  });
});

//editar un aprendiz
aprendiz.put("/api/citizen/editarporid/:id", (req, res) => {
  // recibimos la data enviada desde el formulario
  let id = req.params.id;
  let frmDatos = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password
  };
  // hacemos la consulta
  let consulta = "UPDATE aprendiz SET ? WHERE id = ?";
  bd.query(consulta, [frmDatos, id], (error, aprendiz) => {
    if (error) {
      res.send({
        status: "error",
        mensaje: "ocurrio un error en la consulta !",
        error: error
      });
    } else {
      res.send({
        status: "ok",
        mensaje: "Actualizacion exitosa !",
        aprendiz: aprendiz
      });
    }
  });
});

module.exports = citizen;
