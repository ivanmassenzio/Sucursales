const url = 'http://localhost:3000/api/empleados/'
const contenedorEmpleados = document.querySelector('#tablaEmpleados tbody')
const formEmpleado = document.querySelector('form')
const modalEmpleado = new bootstrap.Modal(document.getElementById('modalEmpleado'))    
const nombre = document.getElementById('nombre')
const genero = document.getElementById('genero')
const puesto = document.getElementById('puesto')
const sucursal = document.getElementById('sucursal')
let opcion = ''
let resultados = ''

// Boton para crear empleados
btnCrearEmpleado.addEventListener('click', ()=>{
    nombre.value = ''
    genero.value = ''
    puesto.value = ''
    sucursal.value = ''
    modalEmpleado.show()
    opcion = 'crear'
})

// funcion para mostrar los resultados
const mostrarEmpleados = (empleados) => {           
    empleados.forEach(empleado => {        
        resultados += `
                        <tr>
                            <td>${empleado.id_empleado}</td>
                            <td>${empleado.nombre}</td>
                            <td>${empleado.genero}</td>
                            <td>${empleado.puesto}</td>
                            <td>${empleado.sucursal}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                        </tr>
                    `
    })    
     contenedorEmpleados.innerHTML = resultados
}

//Procedimiento Mostrar registros
fetch(url)
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
// Procedimiento borrar
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    alertify.confirm("Esta seguro que desea eliminar?",
    function(){
        fetch(url+id, {
            method: 'DELETE'
        })
        .then( res => res.json() )
        .then( ()=> location.reload())
    },
    function(){
        alertify.error('Cancelado');
    })
})

let idForm = 0
on(document, 'click', '.btnEditar', e => {    
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const nombreForm = fila.children[1].innerHTML
    const generoForm = fila.children[2].innerHTML
    const puestoForm = fila.children[3].innerHTML
    const sucursalForm = fila.children[4].innerHTML
    nombre.value =  nombreForm
    genero.value =  generoForm
    puesto.value =  puestoForm
    sucursal.value = sucursalForm
    opcion = 'editar'
    modalEmpleado.show()
     
})

//Procedimiento para Crear y Editar
formEmpleado.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){        
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nombre:nombre.value,
                genero:genero.value,
                puesto:puesto.value,
                sucursal:sucursal.value
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevoEmpleado = []
            nuevoEmpleado.push(data)
            mostrarEmpleados(nuevoEmpleado)
        })
    }
    if(opcion=='editar'){    
        console.log(url+idForm)
        fetch(url+idForm,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nombre:nombre.value,
                genero:genero.value,
                puesto:puesto.value,
                sucursal:sucursal.value
            })
        })
        .then( response => response.json() )
        .then( response => location.reload() )
    }
    modalEmpleado.hide()
})