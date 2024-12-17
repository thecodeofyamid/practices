// Constructor: es una función que se ejecuta cuando se crea un objeto

function Persona(nombre, apellido, edad) {
    // this es una palabra reservada que apunta al objeto que se está creando
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// crear una instancia de Persona
// una instancia es una copia del objeto Persona
const persona1 = new Persona("Jhon", "Doe", 20);
console.log(persona1);

const persona2 = new Persona("Maria", "Rodriguez", 30);
console.log(persona2);

// prototype es una propiedad de un objeto que apunta a un objeto
Persona.prototype.telefono = "123456789";

// agregar una propiedad sin prototipo
persona1.nacionalidad = "española";
console.log(persona1);

//agregar un método con prototipo
Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
}
persona1.saludar()
persona2.saludar()