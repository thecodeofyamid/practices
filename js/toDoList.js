/* 
Entradas: Tareas pendientes


Salidas: Lista de tareas pendientes y lista de tareas completadas actualizada

Procesos:
- Almacenar las tareas en un arreglo.
- Permitir agregar, listar y completar tareas utilizando funciones y métodos.
- Usar diferentes tipos de ciclos para manipular las tareas.
- Implementar closures para manejar el contador de tareas completadas.
- Usar funciones puras e impuras.
- Incluir funciones flecha y demostrar el uso de contexto (this) con call.

 Estructura y requerimientos
 Funciones principales:

- agregarTarea(tarea): Añade una nueva tarea al listado (impura).
- listarTareas(): Lista todas las tareas con su estado (pura).
- completarTarea(indice): Marca una tarea como completada y actualiza el contador (usa un closure).
 
 Ciclos:
- Usa un for para recorrer y mostrar todas las tareas.
- Usa un for...of para procesar las tareas completadas.
- Usa un while para verificar si quedan tareas incompletas.

Closure:

- Implementa un contador que recuerde cuántas tareas se han completado.
Arrow functions y contexto:

- Usa funciones flecha para métodos y demuestra cómo cambian los contextos.

*/

// Librerías
const readline = require('readline')

// Variables
let count = 0
let count2 = 0
let intentos = 0

const tasks = []

let task = {
    id: 0,
    name: '',
    completed: false

}

const counter = counteres()

// Aquí estoy creando una interfaz de línea de comandos para interactuar con el programa
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Funciones

// contador de tareas
function counteres(type) {
    
    seeCount = () => {
        console.log('\x1b[32m%s\x1b[0m', `\n
            ================================================================================
                                        Tareas pendientes: ${count}\n
                                        Tareas completadas: ${count2}
            ================================================================================
        `)  
    }
    return function (type) {
        if (type === 'pendientes') {
            count++
        } else if (type === 'completadas') {
            count--
            count2++
        }
    }
}

start = () => {
    menu = () => {
        console.log(`
Bienvenido a la aplicación de gestión de tareas.
1. Agregar tarea
2. Listar tareas
3. Completar tarea
4. Salir
        `)
        input("menu")
    } 
    menu()
}

// Procesar opción
function processOption(answer) {
    console.clear()
    if (answer === '4') {
        rl.close()
    } else if (answer === '1') {
        input("addTask")
    } else if (answer === '2') {
        listTasks()
    } else if (answer === '3') {
        input('completeTask')
    } else if (answer === null || answer === '' || answer === ' ') {
        console.log('\x1b[31m%s\x1b[0m', 'Opción inválida')
        menu()
    } else {
        console.log('\x1b[31m%s\x1b[0m', 'Opción inválida')
        menu()
    }
}

// Ingresar tarea
function input(type) {
    if (type === "menu") {
        answer = rl.question('Elija una opción: ', processOption)
    } else if (type === "addTask") {
        if (intentos === 0) {
            console.log(`AGREGAR TAREA
Ingrese el nombre de la tarea, cuando termines de escribir todas tus tareas, escribe "atràs" para volver al menú principal: \n`)
        }
        rl.question(`- `, (item) => {
            addItem(item)
        })
    } else if (type === "listTasks") {
        rl.question('Escribe atrás para volver al menú principal: ', validate)
    } else if (type === "completeTask") {
        rl.question('Ingrese el número de la tarea a completar o escribe atrás para volver al menú principal: ', (item) => {
            completeTask(item)
        })
    } else{
        console.log('\x1b[31m%s\x1b[0m', 'Opción inválida')
    }
}

// Validar tarea
function validate(item, type) {
    function validateType(type, bool){
        if (bool) {
            if (type === "addTask") {
                console.log(`\x1b[32m%s\x1b[0m`, 'Tarea agregada correctamente')
                counter('pendientes')
                intentos ++
                return input('addTask')
            } else if (type === "completeTask") {
                console.log(`\x1b[32m%s\x1b[0m`, 'Tarea completada éxitosamente')
                counter('completadas')
                return input('completeTask')
            }
        }else{
            if (type === "addTask") {
                return input('addTask')
            } else if (type === "completeTask") {
                return input('completeTask')
            }
        }
    }

    if (item === undefined) {
        validateType(type, false)
        return false
    } else if (item === '' || item === null) {
        console.log('El nombre de la tarea no puede estar vacío')
        intentos++
        validateType(type, false)
        return false
    } else if (tasks.includes(item) && ((type === "addTask"))) {  
        console.log('La tarea ya existe')
        intentos++
        validateType(type, false)
        return false
    } else if ((item.charAt(0) === ' ' || item.match(/^\d/)) && ((type === "addTask"))) {
        console.log('El nombre de la tarea no puede empezar con un espacio o con un número')
        intentos++
        input('addTask')
        validateType(type, false)
        return false
    } else if(item.toLowerCase() === 'atras' || item.toLowerCase() === 'atràs' || item.toLowerCase() === 'atrás') {
        intentos = 0
        console.log('Volviendo al menú principal...')
        console.clear()
        seeCount()
        menu()
        return false
    } else {
        validateType(type, true)
        return true
    }
}

// Agregar tarea
function addItem(item) {
    itemValidated = validate(item, 'addTask')
    if (itemValidated) {
        task = {
            id: tasks.length + 1,
            name: item,
            completed: false
        }
        tasks.push(task)
        input('addTask')

    }
}

// Listar tareas
function listTasks() {
    console.clear()
    console.log('Tareas pendientes:')
    for (let i = 0; i < tasks.length; i++){
        console.log(`${i + 1}. ${tasks[i].name}`)
    }
    console.log('\nTareas completadas: ')
    for (task of tasks){
        if (task.completed) {
            console.log(`${task.id}. ${task.name}`)
        }
    }
    input("listTasks")

}

// Marcar tarea como completada
function completeTask(index) {
    itemValidated = validate(index, 'completeTask')
    if (itemValidated) {
        tasks[index-1].completed = true
        counter('completadas')
        input("completeTask")
    }
}

// Algoritmo principal
start()