
// Declaro los empleados y las sucursales
const sucursales = []
let storage = null
storage = [{"id_sucursal": 1, "nombre_sucursal": 1,"direccion_sucursal":1,"cajas_total":1,"plataformas_total":1}]
window.addEventListener('DOMContentLoaded', (e) => {
    storage = localStorage.getItem("sucurasles")
    })
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
    window.addEventListener('DOMContentLoaded', (e) => {
    storage = localStorage.getItem("sucurasles")
    })
}

// Funcion crear sucursal
function crearSucursal(){    
    let id_sucursal = parseInt(prompt("Ingrese el numero"))
    let nombre_sucursal = prompt("Ingrese el nombre")
    let direccion_sucursal = prompt("Ingrese la direccion")
    let cajas_total = prompt("Ingrese la cantidad de cajas")
    let plataformas_total = parseInt(prompt("Ingrese la cantidad de plataformas"))
    
    let objSucursal = new Sucursal(id_sucursal, nombre_sucursal, direccion_sucursal, cajas_total, plataformas_total)
    storage.push(objSucursal)    
}

btnCrearSucursal.addEventListener('click', ()=>{    
    crearSucursal()
    renovarStorage();
    mostrarSucursales()    
})


//  Funcion para mostrar los resultaros
function mostrarSucursales(){       
    resultados = ''    
    storage.forEach(sucursal => {
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

function renovarStorage(){
    localStorage.removeItem("sucursales");
    localStorage.setItem("sucursales", JSON.stringify(storage))
}

function main(){
    inicializarElementos();    
    mostrarSucursales();   
}

main()