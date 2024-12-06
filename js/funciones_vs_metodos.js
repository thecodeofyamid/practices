/*
Capacidades que tienen las funciones al igual que
otro obbjetos
*/

// callback = > funcion que se pasa como argumento

// function suma(a, b, callback) {
//     callback(a + b)
// }

// suma(2, 3, function (resultado) {
//     console.log(resultado)
// })

// function operar(a, b, callback) {
//     callback ("Resta", a - b)
//     callback( "Multiplicar", a * b)
//     callback("Divisor", a / b)
//     callback("Suma", a + b)
// }

// operar(7, 5, function (operacion, resultado) {
//     console.log(operacion + " = " + resultado)
// })

// function operar(a, b, callback) {
//     const resultado = callback(a, b)
//     console.log(`Resultado: ${resultado}`)
// }

// operar(5, 3, (a, b) => a + b);
// operar(5, 3, (a, b) => a - b);
// operar(5, 3, (a, b) => a * b);
// operar(5, 3, (a, b) => a / b);

/*
//Retornar funciones 
function a(){
    function b(){
        return "hola"
    }
    return b
}

// Asignar funciones a variables => Expresiones de funciones
var a = function () {
    return "hola"
}

// Tener propiedades y métodos
 
function a () {}
const obj = {}
a.call(obj)


// Anidar funciones => Nested functions
function a() {
    function b() {
        function c() {
            return "hola"
        }
        return c
    }
    return b
}

a()


// Almacenar funciones en objetos
const rocket = {
    name: "cohete",
    launch: function () {
        console.log("Lanzamos el cohete")
    }
}

rocket.launch()
*/

const calculadora = {
    sumar(a, b) {
        return a + b
    },
    resta(a, b) {
        return a - b
    },
    multiplicar(a, b) {
        return a * b
    },
    dividir(a, b) {
        return b != 0 ? a / b : 'No se puede dividir por cero'
    }
}

function operar(a, b) {
    console.log(`Suma: ${calculadora.sumar(a, b)}`)
    console.log(`Resta: ${calculadora.resta(a, b)}`)
    console.log(`Multiplicar: ${calculadora.multiplicar(a, b)}`)
    console.log(`Divisor: ${calculadora.dividir(a, b)}`)
}
operar(7, 5)
