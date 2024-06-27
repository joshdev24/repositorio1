/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola
*/


const validarTitulo = (titulo)=> titulo.length > 4

const validarPrecio = (precio)=> precio > 1

const validarDescripcion = (descripcion)=> descripcion.length > 10 

const validarCategoria = (categoria)=> categoria==="tecnologia" || categoria === "hogar" || categoria ==="otros"

const validarMarca = (marca)=> marca.length >= 3

const solicitarDato = (obj) =>{
    let dato = prompt(obj.mensaje)
while(!obj.validacion(dato)){
    dato = prompt(obj.error)
}
    return dato
}


const DATOS = {

TITULO: {
mensaje: "Ingrese el titulo",
error: "ERROR, titulo no valido, el titulo debe ser mayor a 4 caracteres",
validacion: validarTitulo
}
,

PRECIO: {
    mensaje: "Ingrese el precio",
    error: "ERROR, precio no valido, el precio debe ser mayor a 1",
    validacion: validarPrecio
}
,

DESCRIPCION: {
    mensaje: "Ingrese una descripcion del producto",
    error: "ERROR, descripcion no valida, debe tener al menos 10 caracteres",
    validacion: validarDescripcion
}
,

CATEGORIA: {
    mensaje: "Ingrese la categoria del producto",
    error:"ERROR, la categoria no se escuentra disponible" ,
    validacion: validarCategoria
}
,

MARCA: {
    mensaje: "Ingrese la marca del producto",
error: "ERROR, marca no valida, debe ser de al menos 3 caracteres",
validacion: validarMarca
}
,
}

const registrarProducto = () =>{
const productofinal = {
titulo : null,
precio : null,
descripcion: null,
categoria: null,
marca : null,
}

productofinal.titulo = solicitarDato((DATOS.TITULO)),
productofinal.precio = solicitarDato((DATOS.PRECIO)),
productofinal.descripcion = solicitarDato((DATOS.DESCRIPCION)),
productofinal.categoria = solicitarDato((DATOS.CATEGORIA)),
productofinal.marca = solicitarDato((DATOS.MARCA))

let plantilla = prompt(`
titulo : ${productofinal.titulo}
precio : ${productofinal.precio}
descripcion: ${productofinal.descripcion}
categoria: ${productofinal.categoria}
marca : ${productofinal.marca}
`)


let CONFIRMAR = prompt("Confirmar Producto")
if (CONFIRMAR === null || CONFIRMAR === "NO"){
return registrarProducto()
} else if (CONFIRMAR ==="SI"){
console.log(productofinal)
}  
}
registrarProducto()


