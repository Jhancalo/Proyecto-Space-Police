//leer un archivo externo,tipo JSON
//Java-Script-Object-Notation JSON
// usamos promesas
fetch('./assets/js/aprendiz.js')
//primer salida .then serializa (transforma)los datos en arreglo de objetos JAVASCRIPT

/* .then(function(respuesta){return respuesta.json()})
//accion a desarrollr con ese objeto transformado
.then(function(respuesta){
    console.log(respuesta)
}) */


.then(datos=>datos.json())
//accion a realizar con los datos
.then(datos)=>{
    let mitabla= document.getElementById("mitabla");
for (let i = 0; i < datos.length; i++) {
//Crear la fila
let fila=`
<tr>
<th scope="row">${datos[i].id}</th>
<td>${datos[i].first}</td>
<td>${datos[i].last}</td>
<td>${datos[i].handle}</td>
<td><a href="#"><i class="bi bi-pencil"></i></a></td>
<td><a href="#"><i class="bi bi-trash3"></i></a></td>
</tr>
`
//actualizamos el ELEMENTO DOM(ESPECIFICAMENTE LA TABLA - Pagina HTML)
mitabla.innerHTML+=fila
}};

//capturar elemento HTML a interactuar
