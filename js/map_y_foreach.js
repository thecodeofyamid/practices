
//map() es un método que permite aplicar una función a cada elemento del array y construir un nuevo array con el resultado

const numbersArrayMapped = [1,2,3,4,5]
const squareNumbers = numbersArrayMapped.map(num => num * num)
console.log(numbersArrayMapped)
console.log(squareNumbers)

//forEach() es un método que permite aplicar una función a cada elemento del array pero no construye un nuevo array con el resultado

const colors = ['red', 'green', 'blue']
const iteraterColors = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iteraterColors) // undefined porque no construye un nuevo array pero en realidad se ejecuta la función por cada elemento del array y se imprime el resultado en la consola antes de que se termine la ejecución del forEach