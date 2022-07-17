
// Declaro los empleados y las sucursales

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
    contenedorSucursales = document.querySelector('#tablaSucursales tbody')
    formSucursal = document.querySelector('form')
    btnCrearSucursal = document.querySelector("#btnCrearSucursal")
}

// Funcion crear sucursal
function crearSucursal(){    
    let id_sucursal = parseInt(prompt("Ingrese el numero"))
    let nombre_sucursal = prompt("Ingrese el nombre")
    let direccion_sucursal = prompt("Ingrese la direccion")
    let cajas_total = prompt("Ingrese la cantidad de cajas")
    let plataformas_total = parseInt(prompt("Ingrese la cantidad de plataformas"))
    
    let objSucursal = new Sucursal(id_sucursal, nombre_sucursal, direccion_sucursal, cajas_total, plataformas_total)
    sucursales.push(objSucursal)    
}

btnCrearSucursal.addEventListener('click', ()=>{    
    crearSucursal()    
    mostrarSucursales()    
})


//  Funcion para mostrar los resultaros
function mostrarSucursales(){   
    resultados = ''    
    sucursales.forEach(sucursal => {
        resultados += `
                        <tr>
                            <td>${sucursal.id_sucursal}</td>
                            <td>${sucursal.nombre_sucursal}</td>
                            <td>${sucursal.direccion_sucursal}</td>
                            <td>${sucursal.cajas_total}</td>
                            <td>${sucursal.plataformas_total}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                        </tr>
                    `
    })
    limpiarTablaSucursales()    
     contenedorSucursales.innerHTML = resultados
}


function limpiarTablaSucursales(){
    const divSucursales = document.querySelector("#tablaSucursales tbody")
    while(divSucursales.firstChild) {
        divSucursales.removeChild(divSucursales.firstChild);
    }
    
}     
function main(){
    inicializarElementos();    
    mostrarSucursales();    
}

main()