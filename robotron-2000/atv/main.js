const lista = document.querySelectorAll('[cor]')
const botao = document.getElementsByTagName('button')

function esconderTintas() {  
lista.forEach((elemento) =>{
   elemento.style.display = 'none'
})}


function mostrarTintas() {  
lista.forEach((elemento) =>{
   elemento.style.display = 'block'
})}

