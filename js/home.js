let saludoH1 = document.createElement("h1")
let saludoTexto = document.createTextNode("Hola, " + localStorage.getItem('name'))
saludoH1.appendChild(saludoTexto)
document.body.appendChild(saludoH1)

