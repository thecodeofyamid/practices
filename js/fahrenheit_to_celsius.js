/*
    1. Crear una función que reciba un número en grados Fahrenheit y devuelva el mismo número en grados Celsius.
*/

//librerias
const readline = require('readline')

// Variables
let fahrenheit = []
let celsius = []

// Aquí estoy creando una interfaz de línea de comandos para interactuar con el programa
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async function(){{
    input = async () => {
        rl.question('Ingrese un número en grados Fahrenheit para salir escriba "exit", para mostrar los resultados escriba "show": ', (answer) => {
            if(answer === "exit"){
                rl.close()
                console.log('\x1b[31m%s\x1b[0m', 'Saliendo...')
                process.exit(0)
            } else if(answer === "show"){
                console.log('\x1b[32m%s\x1b[0m', `El número en grados Fahrenheit es: ${fahrenheit}`)
                console.log('\x1b[32m%s\x1b[0m', `El número en grados Celsius es: ${celsius}`)
            } 
            //validar que no sea vacio, null, espacio o enter o que no sea 
            else if(answer === null || answer === '' || answer === ' '){
                console.log('\x1b[31m%s\x1b[0m','Opción inválida')
                input()
            }else {
                intF = parseInt(answer)
                if (isNaN(intF)) {
                    console.log('\x1b[31m%s\x1b[0m', 'La entrada no es un número, por favor intente nuevamente')
                    input()
                }
            }
            fahrenheit.push(intF)
            celsius = fahrenheit.map(n =>(5/9)*(n-32))
            input()
        })
    }
    input()
}})()
