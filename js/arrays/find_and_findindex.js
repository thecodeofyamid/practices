// find() es un método que devuelve el primer elemento que cumple una condición

const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const firstNumberGreterThan15 = numbersArray.find(num => num > 15)
console.log(numbersArray)
console.log(firstNumberGreterThan15)

// findIndex() es un método que devuelve el índice del primer elemento que cumple una condición

const randomNumber = [6,14,50,33,17,4,40]
const indexNumber = randomNumber.findIndex(num => num > 20)
console.log(randomNumber)
console.log(indexNumber)
