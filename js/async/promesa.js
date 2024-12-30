// Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona.
// El asíncronismo es la capacidad de ejecutar tareas en segundo plano sin interrumpir el flujo de la aplicación.

// Promise
/*
Estados: 
- pending: estado inicial, no se ha cumplido ni rechazado.
- fulfilled: la operación se completó satisfactoriamente. 
- rejected: la operación no se completó satisfactoriamente. 
*/

/*
Callback: 
- resolve: se ejecuta cuando la promesa se cumple. 
- reject: se ejecuta cuando la promesa se rechaza. 
*/

/*Metodos:
- then: se ejecuta cuando la promesa se cumple.
- catch: se ejecuta cuando la promesa se rechaza. Se utiliza para manejar errores.
*/

// Ejemplo de promesa
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSucessful = true
        if(operationSucessful){
            resolve('La operación se completó satisfactoriamente')
        } else {
            reject('La operación no se completó satisfactoriamente')
        }
    }, 2000);
})

// then y catch son metodos de la promesa que se ejecutan cuando la promesa se cumple o se rechaza respectivamente.
promesa.then(sucessMsg => {
    console.log(sucessMsg)
})
.catch(errorMsg => {
    console.log(errorMsg)
})