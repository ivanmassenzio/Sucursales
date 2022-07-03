//  Definicion de variables
const url = 'http://localhost:3000/api/empleados/'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalEmpleado = new bootstrap.Modal(document.getElementById('modalEmpleado'))
const formEmpleado = document.querySelector('form')
const nombre = document.getElementById('nombre')
const genero = document.getElementById('genero')
const puesto = document.getElementById('puesto')
const sucursal = document.getElementById('sucursal')
let opcion = ''

btnCrear.addEventListener('click', ()=>{
    nombre.value = ''
    genero.value = ''
    puesto.value = ''
    sucursal.value = ''
    modalEmpleado.show()
    opcion = 'crear'
})


//  Funcion para mostrar los resultaros
const mostrar = (empleados) => {
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
    contenedor.innerHTML = resultados
}

//Procedimiento Mostrar registros
fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error) )