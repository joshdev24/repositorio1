const contadorHTML = document.getElementById("contador")
const btnincrementarHTML = document.getElementById ("btn-incrementar")
const btndecrementarHTML = document.getElementById("btn-decrementar")
const ComprarHTML = document.getElementById("Comprar")


const hide = () => {
contadorHTML.setAttribute("hidden",""),
btndecrementarHTML.setAttribute("hidden","")
btnincrementarHTML.setAttribute("hidden","")
}

const unhide =() =>{
    contadorHTML.removeAttribute("hidden","")
    btndecrementarHTML.removeAttribute("hidden","")
    btnincrementarHTML.removeAttribute("hidden","")
}

const renderizarContador = () => {
    contadorHTML.innerHTML = estadoContador
}

const arrepentimiento =() =>{
    hide()
    ComprarHTML.removeAttribute("hidden","")
}

const comprar =()=>{
unhide()
ComprarHTML.setAttribute("hidden","")
}

const incrementarContador = ()=> {
estadoContador = estadoContador +1
renderizarContador()
}

const decrementarContador = () => {
    if (estadoContador > 1){
    estadoContador = estadoContador -1
    renderizarContador() 
} else{
  return arrepentimiento() 
}
} 

let estadoContador = 1
renderizarContador()

ComprarHTML.addEventListener("click",comprar )
btnincrementarHTML.addEventListener("click", incrementarContador )
btndecrementarHTML.addEventListener("click", decrementarContador)






