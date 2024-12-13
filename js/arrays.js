/*
Crear un array:

1. new Array() or Array() 
*/

const fruits = ["Banana", "Mango", "Kiwi", "Orange"]
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
console.log(number)

// 2. Array literal syntax
const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'baseball', 'basketball']
console.log(sports)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk',
        quantity: '1 cup'

    },
    false
]
console.log(recipeIngredients)

// Acceder a elementos

const firstFruit = fruits[0]
console.log(firstFruit)

// Length property
let numberFruits = fruits.length
console.log(numberFruits)

// Mutability and immutability: dependiendo el metodo se puede modificar o no el array

// 1. Mutable
//agregar elementos
fruits.push('Watermelon')
console.log(fruits)
numberFruits =  fruits.length
console.log(numberFruits)

//2. Inmutable
//concatenar arrays = concatenar es un método que devuelve un nuevo array con los elementos de ambos arrays concatenados
const newFruits = fruits.concat(['Apple', 'Pear'])
console.log(fruits)
console.log(newFruits)

// Checking if an array is array
const isArray = Array.isArray(fruits)
console.log(isArray)

// Sumar elementos en un array = iteración de arrays
// practical excercise: sum the elements of an array

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0
for (let i=0; i < numbersArray.length; i++){
    sum += numbersArray[i]
}
console.log("Suma de numbersArray: " + sum)

