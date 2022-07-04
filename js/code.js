
// Declaro los empleados y las sucursales
const empleados = [
    {
        id_empleado: 1,
        nombre_empleado: "Juan Perez",
        genero_empleado: "Masculino",
        puesto_empleado: "Tesorero",
        sucursal_empleado: 22
    },
    {
        id_empleado: 1,
        nombre_empleado: "Ana Marote",
        genero_empleado: "Femenino",
        puesto_empleado: "Gerenta",
        sucursal_empleado: 22
    },
    {
        id_empleado: 1,
        nombre_empleado: "Leia Oriana",
        genero_empleado: "Femenino",
        puesto_empleado: "Supervisora Comercial",
        sucursal_empleado: 22
    },
    {
        id_empleado: 1,
        nombre_empleado: "Pedro Escamoso",
        genero_empleado: "Masculino",
        puesto_empleado: "Cajero",
        sucursal_empleado: 22
    },
    {
        id_empleado: 1,
        nombre_empleado: "Ana Melisa Elano",
        genero_empleado: "Femenino",
        puesto_empleado: "Plataforma",
        sucursal_empleado: 22
    }
]


const sucursales = [
    {
        id_sucursal: 22,
        nombre_sucursal: "Once",
        direccion_sucursal: "Rivadavia 1200",
        cajas_total: 4,
        plataformas_total: 4
    },
    {
        id_sucursal: 111,
        nombre_sucursal: "Centro",
        direccion_sucursal: "Florida 100",
        cajas_total: 14,
        plataformas_total: 20
    }
]


class Empleado{
    constructor(id_empleado, nombre_empleado, genero_empleado, puesto_empleado, sucursal_empleado){
        this.id_empleado = id_empleado
        this.nombre_empleado = nombre_empleado
        this.genero_empleado = genero_empleado
        this.puesto_empleado = puesto_empleado
        this.sucursal_empleado = sucursal_empleado
    }
}

class Sucursal{
    constructor(id_sucursal, nombre_sucursal, direccion_sucursal, cajas_total, plataformas_total){
        this.id_sucursal = id_sucursal
        this.nombre_sucursal = nombre_sucursal
        this.direccion_sucursal = direccion_sucursal
        this.cajas_total = cajas_total
        this.plataformas_total = plataformas_total
    }
}

function inicializarElementos(){
    contenedorEmpleados = document.querySelector('#tablaEmpleados tbody')
    formEmpleado = document.querySelector('form')
    btnCrearEmpleado = document.querySelector("#btnCrearEmpleado")
    btnCrearSucursal = document.querySelector("#btnCrearSucursal")
}

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

// Funcion crear empleado
function crearSucursal(){    
    let id_sucursal = parseInt(prompt("Ingrese el numero"))
    let nombre_sucursal = prompt("Ingrese el nombre")
    let direccion_sucursal = prompt("Ingrese la direccion")
    let cajas_total = prompt("Ingrese la cantidad de cajas")
    let plataformas_total = parseInt(prompt("Ingrese la cantidad de plataformas"))
    
    let objSucursal = new Sucursal(id_sucursal, nombre_sucursal, direccion_sucursal, cajas_total, plataformas_total)
    sucursales.push(objSucursal)
}

btnCrearEmpleado.addEventListener('click', ()=>{    
    crearEmpleado()    
    mostrarEmpleados()    
})


//  Funcion para mostrar los resultaros

    
function mostrarEmpleados(){   
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
    limpiarTablaEmpleados()    
     contenedorEmpleados.innerHTML = resultados
}

function limpiarTablaEmpleados(){
    const divEmpleados = document.querySelector("#tablaEmpleados tbody")
    while(divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
    
}

     
function main(){
    inicializarElementos();    
    mostrarEmpleados();    
}

main()