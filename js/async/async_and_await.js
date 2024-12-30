// Async y Await es una forma de trabajar con promesas de manera más sencilla y legible. 
// Async es una palabra clave que se utiliza para declarar una función asíncrona.
// Await es una palabra clave que se utiliza para esperar la resolución de una promesa.

//sin async y await
function fetchData() {
    fetch("https://swapi.py4e.com/api/people")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
}

// con async y await
async function fetchDataTwo() {
    try {
        let response = await fetch("https://swapi.py4e.com/api/people")
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const urls = [
    "https://swapi.py4e.com/api/people",
    "https://swapi.py4e.com/api/planets",
    "https://swapi.py4e.com/api/starships"
]

// for await of
async function fetchNewData() {
    try{
        for await (let url of urls){
            let response = await fetch(url);
            let data = await response.json();
            console.log(data)
        }
    }
    catch(error){
        console.log(error)
    }
}