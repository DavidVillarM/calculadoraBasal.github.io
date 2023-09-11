console.log("Hola Mundo");
let miVariable=123;
const MY_VARIABLE= 124;
const PI = 3;
let miCadena1 = "Hola";
let miCadena2 = "Mundo";

console.log(`${miCadena1} ${miCadena2}!`); //¡Hola, mundo!
console.log(`${miCadena1}, ${miCadena2}!`) //¡Hola, mundo!

let primerNumero = 20;
let segundoNumero = 30;
let mayor = primerNumero > segundoNumero ? primerNumero : segundoNumero;

let miDinero = 10;
let precioLaptop = 22;
let precioConDescuento = precioLaptop - (precioLaptop * .20) //Precio del portátil al 20% de descuento

if (miDinero >= precioLaptop || miDinero >= precioConDescuento){
    //La condición era verdadera. Se ejecutará el código de este bloque.
    console.log("¡Conseguiste una nueva laptop!");
}
else {
    //La condición era falsa. Se ejecutará el código de este bloque.
    console.log("¡No puedo pagarlo, todavía!");
}

let num1 = 10;
let num2 = 22;
let num3 = 33; //Precio del portátil al 20% de descuento

if (num1 > num2 && num1 > num3){
    //La condición era verdadera. Se ejecutará el código de este bloque.
    console.log(`Numero1 = ${num1} es el mayor!`);
}
if (num2 > num1 && num2 > num3){
    console.log(`Numero2 = ${num2} es el mayor!`);
}
else {
    //La condición era falsa. Se ejecutará el código de este bloque.
    console.log(`Numero3 = ${num3} es el mayor!`);
}


function saludar() {
    console.log('¡Hola, mundo!');
  }

function saludar2(nombre) {
    const mensaje = `¡Hola, ${nombre}!`;
    console.log(mensaje);
}

function saludar3(nombre, saludo='Quionda'){
    console.log(`${saludo}, ${nombre}`);
}

function sumar(numero1, numero2){
    let suma = numero1 + numero2;
    return suma;
}

let resultado = sumar(1,3);

function mostrarCuandoListo(){
    console.log("Han pasado 3 segundos");
}
setTimeout(mostrarCuandoListo, 3000);


setTimeout(() =>{
    console.log("Han pasado 5 segundos");
}, 5000);


let sabores = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
let cont = 1;

function imprimir10(){
    console.log(cont);
    cont ++;
    if (cont >10){
        clearInterval(interval);
    }
}

let interval = setInterval(imprimir10, 1000);

let saboresHelado = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < saboresHelado.length; i++) {
  console.log(saboresHelado[i]);
} //Termina cuando se imprimen todos los sabores