/*
Filtrar y reducir un array

filter = devuelve un nuevo array con los elementos que cumplen una condición
reduce = devuelve un valor calculado a partir de un array y un acumulador inicial
*/

const numbersArray = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbersArray.filter(num => num % 2 === 0)
console.log(evenNumbers)


const oddNumbers = numbersArray.filter(num => num % 2 !== 0)
console.log(oddNumbers)

// reduce () es un metodo que sirve para reducir un array a un solo valor
// case 1
const numberReduce = [1,2,3,4,5]
const sum = numberReduce.reduce((acc, num) => acc + num, 0)
console.log(sum)

// case 2
const words = ['hola', 'como', 'estas', 'bien', 'gracias', 'por', 'todo', 'el', 'tiempo', 'que', 'pasaste', 'aqui', 'en', 'la', 'vida', 'y', 'espero', 'que', 'este', 'programa', 'sea', 'de', 'utilidad', 'para', 'ti', 'y', 'otros', 'usuarios', 'de', 'javascript', 'que', 'quieran', 'aprender', 'a', 'utilizar', 'este', 'lenguaje', 'de', 'programacion', 'para', 'desarrollar', 'sus', 'propios', 'proyectos', 'o', 'aplicaciones', 'en', 'el', 'futuro', 'con', 'un', 'lenguaje', 'mas', 'poderoso', 'y', 'eficiente', 'como', 'javascript', 'puede', 'ser', 'muy', 'util']

const wordFrequency = words.reduce((acc, word) => {
    if(acc[word]){
        acc[word]++
    } else{
        acc[word] = 1
    }
    return acc
}, {})
console.log(wordFrequency)
