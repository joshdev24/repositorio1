
let edad = prompt ("Por favor ingrese su edad")


if (edad <= 0){
    console.log("Edad no valida")
} else if (edad > 0 && edad <13){
    console.log("Eres un niño") 
} else if (edad >=13 && edad <18){
    console.log("Eres un adolescente")
} else if (edad >=18 && edad <=64){
    console.log("Eres un adulto")
} else if (edad >=65){
    console.log("Eres una persona mayor")
}
 

    

let nota = prompt("Ingrese su calificacion numerica")


if (nota >=0 && nota <=59){

    console.log("Obtuviste una F")
} else if (nota >=60 && nota <=69){
    console.log("Obtuviste una D")
} else if (nota >=70 && nota <=79){
    console.log("Obtuviste una C")
} else if (nota >=80 && nota <=89){
    console.log("Obtuviste una B")
} else if (nota >=90 && nota <=100){
    console.log("Felicitaciones, obtuviste una A")
} else {
    console.log("Calificacion no valida")
}




let dia = prompt ("Por favor ingrese el dia")


if (dia <0 || dia >7){

    console.log("Dia no valido")

} else if (dia === 1 ){
    console.log ("El dia es Lunes")

} else if (dia === 2){

    console.log ("El dia es Martes")

} else if (dia === 3){

    console.log ("El dia es Miercoles")

} else if (dia === 4){

    console.log ("El dia es Jueves")

} else if (dia ===5){
    console.log ("Gracias a dios es viernes")

} else if (dia ===6 ){

    console.log ("El dia es Sabado")

} else if (dia=== 7){

    console.log ("El dia es Domingo")
} 



let grado = prompt("Por favor, ingrese una medida en grados Celsius para ver el estado del agua actualmente")


if (grado <=0){

    console.log ("Se encuentra en estado Solido")
} else if (grado >0 && grado <=99 ){

    console.log ("Se encuentra en estado Liquido")

} else if (grado >=100){
    console.log ("Se encuentra el estado Gaseoso")
} else if (grado = isNaN){

      console.log ("Medida no valida")
}
   


let lado1 = prompt("Ingrese un lado del triangulo")
let lado2 = prompt("Ingrese un segundo lado del triangulo")
let lado3 = prompt("Ingrese un tercer lado del triangulo")


if (lado1 == lado2 && lado1 == lado3){
    console.log ("Equilatero")
} else if (lado1==lado2 && lado1 !=lado3){

    console.log ("Isolesces")
} else {
    console.log ("Escaleno")
}
