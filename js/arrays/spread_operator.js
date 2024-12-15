// spread operator es una forma de expandir un array o un objeto en varias variables

const numbers = [1,2,3,4,5]
const numbers2 = [...numbers]
console.log(numbers)
console.log(numbers2)

// comnbining arrays

const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [...array1, ...array2]
console.log(array1)
console.log(array2)
console.log(array3)

// creating arrays with adittional elements

const baseArray = [1,2,3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]
console.log(baseArray)
console.log(arrayWithAdditionalElements)

// Pass elements to a function

function sum(a,b,c){
    return a + b + c
}

const array = [1,2,3]
const result = sum(...array)
console.log(result)