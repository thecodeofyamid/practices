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

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tasks = []
let intentos = 0

function start(){
    seeMenu()
}

function seeMenu(){
    console.log(`
Menu principal:
    1. Agregar tarea
    2. Listar tareas
    3. Completar tarea
    4. Salir
    `)
    chooseOption()
}

function chooseOption(){
    rl.question('Elija una opción: ', function(option){
            switch (option) {
                case '1':
                    addTask()
                    break
                case '2':
                    seeTasks()
                    break
                default:
                    console.log('Opción no válida')
                    break
            }
        }
    )}

function addTask(){
    console.clear()
    rl.question('- ', function(name){
        if (name === '' || name === null) {
            console.log('El nombre de la tarea no puede estar vacío')
            addTask()
        } else if (name.charAt(0) === ' ' || (name.match(/^\d/))) {
            console.log('El nombre de la tarea no puede empezar con un espacio o con un número')
            addTask()
        } else if (name === 'atras' || name === 'atràs' || name === 'atrás') {
            seeMenu()
        } else {
            const task = {
                name: name,
                state: false
            }
            tasks.push(task)
            addTask()
        }
    }
)}

function seeTasks(){
    console.clear()
    console.log('Tareas pendientes:')
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i].name}`)
    }
    rl.question('Ecribe atras para volver al menú principal: ', function(option){
        if (option === 'atras' || option === 'atràs' || option === 'atrá') {
            seeMenu()
        }
    })
}



start()