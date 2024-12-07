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
                                    Tareas pendientes: ${completed}\n
                                    Tareas completadas: ${pending}
        ================================================================================
    `)
    }
    const getTaskReducer = (status) => (acc, task,i) => {
      if(task.status === status) return acc + `${i+1} - ${task.name}\n`
      if(task.status === status) return acc + `${i+1} - ${task.name}\n`

      return acc + `${i+1} - ${task.name}\n`
    }
    const showTasks = (status) => {
      if(status === TASK_STATUS.PENDING) return console.log(`
        Tareas pendientes: ${task.length}\n
        ${task.reduce(getTaskReducer(TASK_STATUS.PENDING),'')}`)

      if(status === TASK_STATUS.COMPLETED) return console.log(`
        Tareas pendientes: ${task.length}\n
        ${task.reduce(getTaskReducer(TASK_STATUS.COMPLETED),'')}`)

      console.log('\x1b[32m%s\x1b[0m', `\nTareas totales: ${task.length}/n ${task.reduce(getTaskReducer(),'')}`)
    }

    return {
      setTask, // add update task here
      getStatus,showTasks
    }
  }

  const app = useToDoApp()

  async function hanleOption(callback){
    await callback()
    await input('Presione enter para continuar...')
  }

  const menuOptions = {
    'Agregar tarea': async () => {
      const t = await input('Ingrese el nombre de la tarea: ')

      app.setTask(t)
      return
    },
    'Tareas completadas': ()=>hanleOption(()=>app.showTasks(TASK_STATUS.COMPLETED)),
    'Tareas pendientes': ()=>hanleOption(()=>app.showTasks(TASK_STATUS.PENDING)),
    'Listar tareas': ()=>hanleOption(app.showTasks),
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
