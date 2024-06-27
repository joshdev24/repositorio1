    
// const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

// const validacionEmail = (email) =>{
//     return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
// }

// const validacionPassword = (password) =>{
//     return password && password.length >= 6 && tieneMayuscula(password)
// }


// const login = () => {
//     const usuario = {
//         email: null,
//         password: null
//     }

//     let email = prompt('Ingrese un email')
//     while(!validacionEmail(email)){
//         email = prompt('Error email invalido: ingrese nuevamente el email')
//     }
//     usuario.email = email

//     let password = prompt('Ingrese la password que tenga mas de 6 caracteres y una mayuscula')
//     while(!validacionPassword(password)){
//         password = prompt('Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula')
//     }
//     usuario.password = password

//     alert(`Usuario ${usuario.email} registrado`)

//     return usuario
// }


// CALCULADORA FINAL // 

// const tieneMayus = (str) => str !== str.toLowerCase()

// const validarNumero = (numero) => !isNaN(numero)

// const validarEmail = (email) => /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

// const validarOperadores = (operacion) => OPERADORES.hasOwnProperty(operacion)

// const validarPassword = (password) => password && password.length>6 && tieneMayus(password)

// const OPERADORES = {
//     '+': (numero1, numero2) => numero1 + numero2,
//     '-': (numero1, numero2) => numero1 - numero2,
//   }

const solicitarDatos = (obj) =>{
    let dato = prompt(obj.mensaje)
while(!obj.validacion(dato)){
    dato = prompt(obj.error)
}
    return dato
}

// const DATOS = {

// NUMEROS: {
// mensaje :  `Ingrese un numero`,
// error :  `ERROR, NUMERO NO VALIDO`,
// validacion : validarNumero,
// }
// ,

// PASSWORD: {
//     mensaje :  `Por favor, ingrese su contraseña`,
//     error :  `ERROR, CONTRASEÑA NO VALIDA`,
//     validacion: validarPassword,
// }
// ,

// Email: {
//     mensaje :  `Ingrese su Email`,
//     error :  `ERROR, EMAIL NO VALIDO `,
//     validacion : validarEmail,
// }
// ,

// OPERACION :{
//     mensaje : `Ingrese el simbolo del operador matematico que desea utilizar (${Object.keys(OPERADORES)})`,
//     error : `ERROR, OPERADOR NO DISPONIBLE`,
//     validacion: validarOperadores,
// }
// }

// const login = () => {
//     const user = {
//      email : null,
//      password : null,
//     }

// user.email = solicitarDatos(DATOS.Email),
// user.password = solicitarDatos (DATOS.PASSWORD),

// alert (`El usuario ${user.email} se ha registrado correctamente`)
// return user
// }
// let usuarioRegistrado = login()
// localStorage.setItem('user',JSON.stringify(usuarioRegistrado))
// localStorage.getItem('user','usuarioRegistrado')

// const calculadora = () => {
//  const computo = {
// numero1 : null,
// numero2 : null,
// operacion : null,
// resultado : null,
// }

// computo.operacion = solicitarDatos(DATOS.OPERACION),
// computo.numero1 = Number(solicitarDatos (DATOS.NUMEROS)),
// computo.numero2 = Number(solicitarDatos (DATOS.NUMEROS)),
// computo.resultado= OPERADORES[computo.operacion](computo.numero1, computo.numero2)

//   alert(`El resultado de ${computo.numero1} ${computo.operacion} ${computo.numero2} es:  ${computo.resultado}`)
// alert (`Gracias por utilizar la calculadora TERRENEITOR 300, la mas poderosa que ha existido, con traccion 4x4 y 2 turbomotores :)`)
// }

// console.log(login())
// console.log(calculadora())






