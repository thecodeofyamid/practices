// this es una palabra reservada que apunta al objeto que se está creando
// this se utiliza en las clases para acceder a los parametros de la función constructora

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona("Jhon", "Doe", 20);
console.log(persona1);

persona1.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
}
persona1.saludar();