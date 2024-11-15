//let datos=[9,"Juan","Arias","walo@gmail.com"]
/* let datos=[{
    id:123,
    first:"Juan",
    last:"Perez",
    handle:"juan@gmail.com"
},
{
    id:321,
    first:"Luis",
    last:"Ramirez",
    handle:"RamiroLuis@gmail.com"
},
{
    id:007,
    first:"James",
    last:"Bond",
    handle:"007@gmail.com"
},
{
    id:01,
    first:"Paul",
    last:"Paraco",
    handle:"AmoLaGuerrilla@gmail.com"
}]
 */
//capturar elemento HTML a interactuar
let mitabla= document.getElementById("mitabla")
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
}