// Las propiedades solo existen en clases y funciones constructoras
// solo las clases y funciones constructoras pueden generar la propiedad prototype
// El prototype va a tener por dentro los mismos métodos y propiedades que la clase o función constructora
// Las instancias no van a tener la propiedad prototype

class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log(`${this.nombre} emite un sonido de ${this.tipo}`);
    }
}

class Perro extends Animal{
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza;
    }

    emitirSonido() {
        console.log("El perro está ladrando");
    }

    correr() {
        console.log(`${this.nombre} corre`);
    }
}

let perro1 = new Perro("Pedro", "Perro", "Shepherd");
console.log(perro1);
perro1.emitirSonido();
perro1.correr();

//agregar metodos a un objeto o instancia
perro1.nuevoMetodo = function() {
    console.log("nuevo metodo");
}
perro1.nuevoMetodo();

//agregar metodos a todos los objetos o instancias

/*La cadena de prototipos es como una escalera o una serie de "niveles" donde JavaScript busca propiedades y métodos cuando intentas acceder a algo en un objeto.

Si una propiedad o método no está en el propio objeto, JavaScript sube al siguiente nivel: su prototype.
Si tampoco está allí, sigue subiendo por los prototipos hasta llegar al final de la cadena (donde aparece null, que indica que no hay más prototipos).*/

Perro.prototype.segundoMetodo = function() {
    console.log("segundo metodo");
}
console.log(perro1)
perro1.segundoMetodo();
console.log(Perro.prototype)

// obtener el prototipo de una instancia
let currentPrototype = Object.getPrototypeOf(perro1);

//for (
//    ;
//    currentPrototype !== null;
//    currentPrototype = Object.getPrototypeOf(currentPrototype)
//    ) 
//    {
//    console.log(currentPrototype);
//}
