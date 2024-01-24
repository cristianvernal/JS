console.log("Hola Mundo")

// tipos de datos en JS
//String: "entre comillas solo texto"
//boolean: true o false
//Null: nulo.(vacia)
//Number: 123546
// undefined. variable no definida
// Object: objeto. agrupan datos.

// variables
// var, let o const

// var miPrimeraVariable = 'lala'

let miPrimeraVariable = 'Mi primera variable!'
console.log(miPrimeraVariable);

//Mutabilidad
miPrimeraVariable = 'Esto a cambiado' //cambiando el valor de la variable
console.log(miPrimeraVariable);

let miBoolean = true;
let miBoolean2 = false;

let miNumero = 0;
let miNumero2 = 12;
let miNumero3 = -323;

console.log(miNumero, miNumero2, miNumero3, miBoolean, miBoolean2);

let undefined
console.log(undefined)

let nulo = null
console.log(nulo);

//objetos: agrupacion de datos, hacen sentido entre si. Los objetos no tienen variables, tienen propiedades.

//objeto vacio
const miPrimerObjeto = {}

//objeto
const miObjeto = {
    unNumero: 12,
    unString: 'esta cadena de caracteres',
    unaCondicion: true
}

console.log(miObjeto); //si quiero llamar una sola propiedad se utiliza el punto

//Arreglos.

const arrVacio = []
const arr = [1,2,'hola mundo', miObjeto]


arrVacio.push(5) //agregar elemento
arrVacio.push(4) //agregar elemento
arrVacio.push('hola') //agregar elemento
arrVacio.push(23) //agregar elemento
arrVacio.push(miPrimeraVariable)
console.log(arrVacio);

const suma = 1 + 2
const resta = 1 - 2
const multiplicar = 3 * 2
const dividir = 9/3

console.log(suma, resta, multiplicar, dividir)


const modulo = 10 % 3
console.log(modulo)

let num = 5
// const vs let
// num++
// num++
// num++
// num++
// num++
num += 4
console.log(num)

let num2 = 5

// num2--
// num2--
// num2--
// num2--
// num2--
// num2--
num2 -= 5
console.log(num2)


// operadores de comparacion (hacen comparaciones entre datos)

//igualdad estricta
const resultado1 = 5 === 6
// igualdad no estricta.
const resultado2 = 5 == '5'

const resultado3 = 5 < 6
const resultado4 = 5 < 5

console.log(resultado1, resultado2);
console.log(resultado3, resultado4);

//operadores logicos

// or(||), and(&&), not(!)

const resutladoOr = false || 'Hola'
console.log(resutladoOr);

const resultadoAnd = true && true
console.log(resultadoAnd);

const resultadoNot = !true 
console.log(resultadoNot);
