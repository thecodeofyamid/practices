const { stat } = require('fs');
const { parse } = require('path');
const readline = require('readline')
const uuid = require('uuid').v4
 

const TASK_STATUS = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED'
}
// Aquí estoy creando una interfaz de línea de comandos para interactuar con el programa
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async function(){

  const useToDoApp = () => {
    const task = []
    const setTask = (name) => {
      if(!name) throw new Error('Task name is required')

      task.push({
        id: uuid(),
        status: TASK_STATUS.PENDING,
        name,
      })

      return this
    }

    const getStatus = () => {
      const completed = task.reduce( (acc, task) =>  acc + (task.status === TASK_STATUS.COMPLETED) , 0)
      const pending = task.length - completed
      console.log('\x1b[32m%s\x1b[0m', `\n
================================================================================
                            Tareas pendientes: ${pending}\n
================================================================================
${task.reduce(getTaskReducer(TASK_STATUS.PENDING),'')}\n\n
================================================================================
                            Tareas completadas: ${completed}\n
================================================================================
${task.reduce(getTaskReducer(TASK_STATUS.COMPLETED),'')}
    `)
    }
    const getTaskReducer = (status) => (acc, task, i) => {
      console.log(`Task Staus: ${task.status} | Status: ${status}`)
      if(task.status === status) return acc + `${i+1} - ${task.name}\n`
      return acc + ``
    }
    const showTasks = (status) => {
      console.log(status)
      if(status === TASK_STATUS.PENDING) return console.log(`
Tareas pendientes: ${task.filter(t => t.status === TASK_STATUS.PENDING).length}\n
${task.reduce(getTaskReducer(TASK_STATUS.PENDING),'')}`)

      if(status === TASK_STATUS.COMPLETED) return console.log(`
Tareas completadas: ${task.filter(t => t.status === TASK_STATUS.COMPLETED).length}\n
${task.reduce(getTaskReducer(TASK_STATUS.COMPLETED),'')}`)

console.log('\x1b[32m%s\x1b[0m', `\nTareas totales: ${task.length}\n ${task.reduce(getTaskReducer(),'')}`)
    }

    const updateTask = (index) => {
      const i = parseInt(index, 10)
      if(isNaN(i)) throw new Error('El id no es un número')
      task[index-1].status = TASK_STATUS.COMPLETED
    }

    const closeSession = () => {
      console.log('\x1b[31m%s\x1b[0m', `Sesión cerrada`)
      process.exit()
    }

    return {
      setTask, updateTask,// add update task here
      getStatus,showTasks,
      closeSession
    }
  }

  const app = useToDoApp()

  async function handleOption(callback){
    await callback()
    await input('Presione enter para continuar...')
  }

  const menuOptions = {
    'Agregar tarea': async () => {
      const t = await input('Ingrese el nombre de la tarea: ')

      app.setTask(t)
      return
    },
    'Actualizar tarea': async () => {
      handleOption(()=> app.showTasks(TASK_STATUS.PENDING))
      const t = await input('Ingrese el id de la tarea: ')
      app.updateTask(t)
    },
    'Tareas completadas': ()=>handleOption(()=>app.showTasks(TASK_STATUS.COMPLETED)),
    'Tareas pendientes': ()=>handleOption(()=>app.showTasks(TASK_STATUS.PENDING)),
    'Listar tareas': ()=>handleOption(app.getStatus),
    'Cerrar sesion': ()=>handleOption(app.closeSession),
  }
  async function input(prompt){
    return new Promise((resolve) => {
      rl.question(prompt, resolve);
    });
  }
  async function runTime(){
    const entries = Object.entries(menuOptions)

    while(true){
      const m = entries.map( ([opt,v], i)=> `${i+1} - ${opt}` ).join('\n')
      console.log(`
Bienvenido a la aplicación de gestión de tareas.
${m}`)

        const selection = await input('Elija una opcion: ')
        const index = Number(selection) - 1
        if(Number.isNaN(index)) return console.log('\x1b[31m%s\x1b[0m', 'Opción inválida')

        const [_,menuAction] = entries[index]
        await menuAction()
        console.clear()
    }
  }

runTime()
})()
