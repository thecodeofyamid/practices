
/* 
entradas: 
- objeto llamado "miLibreria" que tenga propiedades de autor, titulo y año
- array llamado "librosFavoritos" que tenga varios titulos de libros

salidas:
- for in para mostrar cada propiedad de "miLibreria"
- for of para mostrar cada titulo de "librosFavoritos
*/

const librosFavoritos = [
    "El libro de Jhon 1",
    "El libro de Jhon 2",
    "El libro de Jhon 3",
]

// for of es para recorrer los elementos de un array, es decir, los titulos de los libros favoritos
for (let titulo of librosFavoritos) {
    console.log("Titulo favorito: " + titulo)
}

const miLibreria = {
    autor: "Jhon Doe",
    titulo: "El libro de Jhon",
    ano: 2000
}

// for in es para recorrer las propiedades de un objeto. Por ejemplo, para mostrar cada propiedad de "miLibreria"
for (let prop in miLibreria) {
    console.log("Mi libreria tiene " + prop + " = " + miLibreria[prop])
}

