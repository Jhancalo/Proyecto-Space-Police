const mysql = require('mysql2');


// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
port: 3300,
database: 'interpolice'
});

 // Conexión a la base de datos
connection.connect((err) => {
if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
}
console.log('Conexión exitosa a la base de datos');


});



// Cerrar la conexión a la base de datos
connection.end((err) => {
    if (err) {
        console.error('Error al cerrar la conexión a la base de datos: ', err);
        return;
    }
    console.log('Conexión cerrada a la base de datos');
});


