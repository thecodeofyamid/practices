// Apartir del 2015, JavaScript incorpora clases, es decir orientación a objetos

// una clase es un molde o plantilla para crear objetos
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

// crear una instancia de Persona
const persona1 = new Persona("Jhon", "Doe", 20);
persona1.saludar();

const persona2 = new Persona("Maria", "Rodriguez", 30);
persona2.saludar();

//Javascript funciona con objetos y prototipos, y programación orientada a objetos funciona con herencia

// las clases o funciones de objetos constructuras automaticamente generan prototipos que va a tener todos los métodos y propiedades de la clase que luego se va a heredar o compartir con las instancias que se van a crear

