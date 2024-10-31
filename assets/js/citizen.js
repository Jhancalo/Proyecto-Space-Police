const express = require('express');
const bd=require('./bd.js');
const citizen= express() ;

citizen.get('/api/citizen/listartodos', (req, res) => { 

    let consulta='SELECT * FROM `citizen`';
    bd.query(consulta, (err, results) => {
        if (err) {
            res.send({
                status: 'error',
                message: 'Error al consultar la base de datos',
                error: err
         })
        }
        else {
            res.send({
                status: 'ok',
                message: 'Consulta realizada correctamente',
                data: results
            });
        }
    })

});




citizen.get('/api/citizen/SeleccionarID/:ID', (req, res) => { 

    let id=req.params.ID;
    let consulta='SELECT * FROM `citizen` WHERE `id_Citizen` = ?';
    bd.query(consulta,[id], (err, results) => {
        if (err) {
            res.send({
                status: 'error',
                message: 'Error al consultar la base de datos',
                error: err
         })
        }
        else {
            res.send({
                status: 'ok',
                message: 'Consulta realizada correctamente',
                data: results
            });
        }
    })

});
  

citizen.post('/api/citizen/agregarcitizen', (req, res) => { 

   let datos={
    id_Citizen:req.body.id,
    nombre:req.body.nombre,
    apellidos:req.body.apellido,
    apodo:req.body.apodo,
    email:req.body.email,
    foto:req.body.foto,
    fechanace:req.body.fechanace,
    categoria_idCategoria:req.body.categoria_idCategoria

}
    let consulta='Insert Into citizen set ?';
    bd.query(consulta,[id], (err, results) => {
        if (err) {
            res.send({
                status: 'error',
                message: 'Error al consultar la base de datos',
                error: err
         })
        }
        else {
            res.send({
                status: 'ok',
                message: 'Consulta realizada correctamente',
                data: results
            });
        }
    })

});
