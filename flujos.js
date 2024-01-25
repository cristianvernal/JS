// control flujo if
if (false) {
    console.log("estoy dentro de un if ")
}

const edad = 5
    if (edad > 5 && edad < 18){
        console.log("el niño puede jugar")
    }else{
        console.log("el niño no puede jugar")
    }

// control flujo while

let x = 0

while (x <= 5) {
    console.log(x);
    x++
}
console.log("loop terminado")

// control flujo switch

let y = 3

switch(y) {
    case 1:{
        console.log("yo soy el caso 1")
        break;
    }
    case 2: {
        console.log("Chanchito feliz")
        break;

    }
    case 3: {
        console.log("chanchito triste")
        break;

    }
    default:
        console.log("no hay chanchito")
        break;

}

// control flujo "for"

for (let i = 0; i < 10; i++) {
    console.log(i)
}

const numeros = [1,2,3,4,5]

console.log(numeros[0])

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}