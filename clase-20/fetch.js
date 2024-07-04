




// const soliciarUsuarios = async () => {
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/users",
//         {
//             method: "GET"

//         })

//     console.log (respuesta)
//     const resultado = await respuesta.json()
//     console.log(resultado)

// }


// soliciarUsuarios()


const contenedordePosteosHTML = document.getElementById("contenedor")

const solicitarPosteos = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
    
}

const resultado = await respuesta.json()

const renderizarPosteos = (obj) => {
    let plantilla = ``;
    for (const post of resultado) {
    plantilla = plantilla + `
<div> 
<h3> ${post.title}</h3>
<p>${post.body}>/p>
<button> $heart </button>
</div>
`
}
contenedordePosteosHTML.innerHTML = plantilla
}
solicitarPosteos()