/*
Requerimientos:

- El usuario puede ingresar su usuario y contraseña
- El sistema debe ser capaz de validar si el usuario y contraseña ingresados existen en la base de datos
- Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline
- Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar timeline

*/
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const SESSION_STATUS = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED'
}

const userDatabase = [
    { username: "Jhon", password: "123456" },
    { username: "Maria", password: "654321" },
    { username: "Juan", password: "987654" }
];

const timeline = [
    { id: 1, user: "Jhon", message: "Hola, soy Jhon", date: "2020-01-01", status: SESSION_STATUS.CLOSED },
    { id: 2, user: "Maria", message: "Hola, soy Maria", date: "2020-01-02", status: SESSION_STATUS.CLOSED},
    { id: 3, user: "Juan", message: "Hola, soy Juan", date: "2020-01-03", status: SESSION_STATUS.CLOSED}
];

(async function() {
    const useRedSocial = () => {
        const seeTimeline = () => {
            console.log("================================================================================")
            console.log("                              Timeline de la red social                            ")
            console.log("================================================================================")
            timeline.forEach(post => {
                console.log(`${post.user}: "${post.message}" (${post.date})`);
            });
            
        }
        const closeSession = () => {
            console.log('\x1b[31mSesión cerrada\x1b[0m')
            process.exit()
        }
        return {
            login: (user, pass) => {
                if(userDatabase.find(u => u.username === user && u.password === pass)){
                    console.clear()
                    console.log('\x1b[32m%s\x1b[0m', `Usuario: ${user}`)
                    console.log('\x1b[32m%s\x1b[0m', `Sesión iniciada exitosamente`)
                    return seeTimeline() 
                }
                console.log('\x1b[31m%s\x1b[0m', `Usuario o contraseña incorrectos`)
            },
            seeTimeline, closeSession
        }
    }    

    const app = useRedSocial()

    async function handleOption(callback){
        await callback()
    }

    async function input(prompt){
        return new Promise((resolve) => {
            rl.question(prompt, resolve);
        });
    }

    const menuOptions = {
        'Ingresar': async () => {
            const username = await input('Ingrese su usuario: ')
            const password = await input('Ingrese su contraseña: ')
            handleOption(()=> app.login(username, password))
        },
        'Salir': ()=>{
            handleOption(app.closeSession)
        }
    }

    async function runTime(){
        const entries = Object.entries(menuOptions)
        while(true){
            const m = entries.map( ([opt], i)=> `${i+1} - ${opt}` ).join('\n')
            console.log(`
Bienvenido a la aplicación de red social.
${m}`)
            const selection = await input('Elija una opcion: ')
            const index = Number(selection) - 1
            if(Number.isNaN(index)) return console.log('\x1b[31m%s\x1b[0m', 'Opción inválida')
            const [_,menuAction] = entries[index]
            await menuAction()
        }
    }
runTime()
})()
