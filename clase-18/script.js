/* DOM = document object model = modelo objeto del documento */
//Document es una variable global que se crea al abrir la pagina
/* console.log(document) */

//Obtiene un elemento por id, si lo encuentra lo retorna (como objeto), sino, retorna null
// const titulo = document.getElementById('titulo')
// console.dir(titulo.innerText)


// titulo.innerText = 'Hola' 


// const cajaProducto = document.getElementById('caja-producto')
// console.dir(cajaProducto)

// cajaProducto.innerHTML = `
//     <h2>Soy un subtitulo</h2>
//     <p>Tv muy linda</p>
//     <span>Precio: <b>$500</b></span>
// `

const usuario = {
    nombre: `Joshua`,
    apellido: `Touson`,
    direccion: `Blablabla456`,
    edad:`22`,
}


const infoUsuario = document.getElementById('usuario')
infoUsuario.innerHTML = `
<div>
</h2> Nombre Completo: ${usuario.nombre} ${usuario.apellido}</h2> 
</span> Edad: ${usuario.edad} </span>
</span> Direccion: ${usuario.direccion} </span>
<div>
`


// ``Renderizar un carrito:
// Un array de items llamado carrito
// Cada item tiene el sig formato
// object:
//     nombre: string
//     id: numero positivo distinto de 0
//     precio: numero positivo distinto de 0
//     cantidad: numero positivo distinto de 0
//     img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
// Cada item mostrado en HTML va a tener este formato
// Div
//     h3: {nombre} id:#{id}
//     img: el src tendra el valor {img} y el ancho en 100px
//     span: Precio unitario: ${precio} x {cantidad} unidades
//     span: Total: ${precio * cantidad}
// */``




const carrito = [
{
    nombre: `Vaso de vidrio`,
    id: 1,
    precio: 20,
    cantidad: 4,
    img : "https://http2.mlstatic.com/D_NQ_NP_2X_793029-MLA74159821137_012024-F.webp"
},
{
    nombre: `Vaso de Plastico`,
    id: 2,
    precio: 5,
    cantidad: 10,
    img : "https://www.flexipack.com.ar/Image/0/600_750-500cc.jpg"
},
{
    nombre: `Vaso de ceramica`,
    id: 3,
    precio: 100,
    cantidad: 2,
    img : "https://acdn.mitiendanube.com/stores/001/606/758/products/dsc_45391-93d1ea5eb8da39b48516376878802131-1024-1024.webp"
},
]

const renderizarCarrito = (carrito) => {
const carritoHTML = document.getElementById('carrito')
const totalHTML = document.getElementById('total')
let total = 0
let plantilla = ``;
for (const producto of carrito){
total = total + (producto.precio * producto.cantidad)
plantilla = plantilla + `
    <div>
     </h1> ${producto.nombre} id:#${producto.id} </h1>
     <img width='100px' src="${producto.img}"/>
     </span> Precio unitario: ${producto.precio} x ${producto.cantidad} unidades </span>
     </span> Total: ${producto.precio * producto.cantidad} </span>
    <div>
`
}
carritoHTML.innerHTML = plantilla;
totalHTML.innerHTML = `Total: $` + total
}

renderizarCarrito(carrito)

const buscarPorId = (id) => {
    for (const item of carrito){
        if (item.id === id){
            return id
        }
    }
}



const eliminarItemPorId = (id) =>{
const ItemBuscado = buscarPorId(id)
if (ItemBuscado){
    if(ItemBuscado.cantidad === 1){
const posicionItem = carrito.findIndex ((item)=> item.id ===id)
carrito.splice(posicionItem,1)
} 
else{
    ItemBuscado.cantidad = ItemBuscado.cantidad -1
}
renderizarCarrito(carrito)
} 
else{
    console.error (`Error: Item con id inexistente`)
}


console.log(ItemBuscado)
}



// Crear la funcion llamada agregarItemAlCarrito(item)
// Buscar si en carrito ya existe un elemento con ese id
// SI existe unicamente incrementaran su cantidad en 1
// SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1
// Se agrega al array carrito pero con la propiedad cantidad en 1


const agregarItemAlCarrito = (producto) => {
    const ItemBuscado = carrito.find((item) => item.id === producto.id)
    if (ItemBuscado && ItemBuscado.cantidad >=1){
        ItemBuscado.cantidad += 1;
        renderizarCarrito(carrito)
    }
      else{
    producto.cantidad = 1;
    carrito.push(producto)
     renderizarCarrito(carrito)
}

} 
agregarItemAlCarrito({
    nombre: `Vaso de Plastico`,
    id: 2,
    precio: 5,
    img : "https://www.flexipack.com.ar/Image/0/600_750-500cc.jpg"
})

