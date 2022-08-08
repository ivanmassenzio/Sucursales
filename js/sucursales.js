const url = 'http://localhost:3000/api/sucursales/'
const contenedorSucursales = document.querySelector('#tablaSucursales tbody')
const formSucursal = document.querySelector('form')
const modalSucursal = new bootstrap.Modal(document.getElementById('modalSucursal'))    
const numero = document.getElementById('numero')
const nombre = document.getElementById('nombre')
const direccion = document.getElementById('direccion')
const totalcajas = document.getElementById('totalcajas')
const totalplataformas = document.getElementById('totalplataformas')
let opcion = ''
let resultados = ''

// Boton para crear sucursales
btnCrearSucursal.addEventListener('click', ()=>{    
    numero.value = ''
    nombre.value = ''
    direccion.value = ''
    totalcajas.value = ''
    totalplataformas.value = ''
    modalSucursal.show()
    opcion = 'crear'  
})


//  Funcion para mostrar los resultaros
const mostrarSucursales = (sucursales) => {           
    sucursales.forEach(sucursal => {
        resultados += `
                        <tr>
                            <td>${sucursal.idsucursal}</td>
                            <td>${sucursal.nombre}</td>
                            <td>${sucursal.direccion}</td>
                            <td>${sucursal.cajas_total}</td>
                            <td>${sucursal.plataformas_total}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                        </tr>
                    `
    })    
     contenedorSucursales.innerHTML = resultados
}

//Procedimiento Mostrar registros
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarSucursales(data) )
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
    const numeroForm = fila.children[0].innerHTML
    const nombreForm = fila.children[1].innerHTML
    const direccionForm = fila.children[2].innerHTML
    const totalcajasForm = fila.children[3].innerHTML
    const totalplataformasForm = fila.children[4].innerHTML
    numero.value = numeroForm
    nombre.value =  nombreForm
    direccion.value =  direccionForm
    totalcajas.value =  totalcajasForm
    totalplataformas.value = totalplataformasForm
    opcion = 'editar'
    modalSucursal.show()
     
})

//Procedimiento para Crear y Editar
formSucursal.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){        
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                numero:numero.value,
                nombre:nombre.value,
                direccion:direccion.value,
                totalcajas:totalcajas.value,
                totalplataformas:totalplataformas.value
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevaSucursal = []
            nuevaSucursal.push(data)
            mostrarSucursales(nuevaSucursal)
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
                numero:numero.value,
                nombre:nombre.value,
                direccion:direccion.value,
                totalcajas:totalcajas.value,
                totalplataformas:totalplataformas.value
            })
        })
        .then( response => response.json() )
        .then( response => location.reload() )
    }
    modalSucursal.hide()
})