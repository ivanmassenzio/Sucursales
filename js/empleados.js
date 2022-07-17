class Empleado{
    constructor(id_empleado, nombre_empleado, genero_empleado, puesto_empleado, sucursal_empleado){
        this.id_empleado = id_empleado
        this.nombre_empleado = nombre_empleado
        this.genero_empleado = genero_empleado
        this.puesto_empleado = puesto_empleado
        this.sucursal_empleado = sucursal_empleado
    }
}

function inicializarElementos(){    
    contenedorEmpleados = document.querySelector('#tablaEmpleados tbody')
    formEmpleado = document.querySelector('form')
    modalEmpleado = new bootstrap.Modal(document.getElementById('modalEmpleado'))    
    nombre = document.getElementById('nombre')
    genero = document.getElementById('genero')
    puesto = document.getElementById('puesto')
    sucursal = document.getElementById('sucursal')
    // btnCrearEmpleado = document.querySelector("#btnCrearEmpleado")
}
const contenedorEmpleados = document.querySelector('#tablaEmpleados tbody')
const formEmpleado = document.querySelector('form')
const modalEmpleado = new bootstrap.Modal(document.getElementById('modalEmpleado'))    
const nombre = document.getElementById('nombre')
const genero = document.getElementById('genero')
const puesto = document.getElementById('puesto')
const sucursal = document.getElementById('sucursal')
let opcion = ''

// Funcion crear empleado
function crearEmpleado(){    
    let id_empleado = parseInt(prompt("Ingrese el id"))
    let nombre_empleado = prompt("Ingrese el nombre")
    let genero_empleado = prompt("Ingrese el genero")
    let puesto_empleado = prompt("Ingrese el puesto")
    let sucursal_empleado = parseInt(prompt("Ingrese la sucursal"))
    
    let objEmpleado = new Empleado(id_empleado, nombre_empleado, genero_empleado, puesto_empleado, sucursal_empleado)
    empleados.push(objEmpleado)
}

btnCrearEmpleado.addEventListener('click', ()=>{
    nombre.value = ''
    genero.value = ''
    puesto.value = ''
    sucursal.value = ''
    modalEmpleado.show()
    opcion = 'crear'
})
    
const mostrarEmpleados = (empleados) => {   
    resultados = ''    
    empleados.forEach(empleado => {
        resultados += `
                        <tr>
                            <td>${empleado.id_empleado}</td>
                            <td>${empleado.nombre_empleado}</td>
                            <td>${empleado.genero_empleado}</td>
                            <td>${empleado.puesto_empleado}</td>
                            <td>${empleado.sucursal_empleado}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                        </tr>
                    `
    })    
     contenedorEmpleados.innerHTML = resultados
}

// function limpiarTablaEmpleados(){
//     const divEmpleados = document.querySelector("#tablaEmpleados tbody")
//     while(divEmpleados.firstChild) {
//         divEmpleados.removeChild(divEmpleados.firstChild);
//     }
    
// }
//Procedimiento Mostrar registros
fetch('../files/empleados.json')
    .then( response => response.json() )
    .then( data => mostrarEmpleados(data) )
    .catch( error => console.log(error) )

const on = (element, event, selector, handler) => {    
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    alertify.confirm("This is a confirm dialog.",
    function(){
        alertify.success('Ok');
    },
    function(){
        alertify.error('Cancel');
    })
})


     
function main(){
    inicializarElementos();    
    // mostrarEmpleados();    
}

// main()