// Objetos: es una estructura de datos que almacena datos en key-value pairs ( es decir pares clave-valor, que signician que la clave es un identificador del valor )

// Crear un objeto
// un objeto tiene propiedades y métodos
// propiedad = generan valor
// método = generan interacción, función
const persona = {
    nombre: "Jhon Doe",
    nacimiento: {
        dia: 1,
        mes: 1,
        anio: 2000
    },
    libro_favorito: "El libro de Jhon",
    saludar: function(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}
console.log(persona)

// Acceso a propiedades
console.log(persona.nombre)
console.log(`Nacimiento: ${persona.nacimiento.dia}/${persona.nacimiento.mes}/${persona.nacimiento.anio}`)
console.log(persona.libro_favorito)
persona.saludar()

// agregar nueva propiedad
persona.edad = persona.nacimiento.anio - 1900
console.log(persona.edad)

// agregar nuevo método
const saludarEnIngles = function(){
    console.log(`Hello, I'm ${this.nombre}`)
}
console.log(persona.saludarEnIngles)