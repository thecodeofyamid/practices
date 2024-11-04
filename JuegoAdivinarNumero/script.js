function generarNumero(min,max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNumber)
}

function enviarMensaje(contenido,color) {
    mensaje.innerHTML = `<h4 style='padding: 2%; width: 100%'>${contenido}</h4>`
    mensaje.style.color = color
}

function countFunc(boolean){
    if (boolean){
        count++
    } else{
        count = 0
    }
    intentos.innerText = count
}

function timeOut(boolean) {
    if (boolean){
        setTimeout(() => {
            desactivarCampos()
            mostrarOpciones()
        }, 5000);
        return
    } else{
        setTimeout(() => {
            enviarMensaje(`Intenta adivinar el número entre ${min} y ${max}`, 'blue')
        }, 3000);
        return
    }  
}

function activarCampos() {
    inputIntento.disabled = false
    btnIntentar.disabled = false
    inputIntento.style.cursor = 'pointer'
    btnIntentar.style.cursor = 'pointer'
    contenedorIntentos.style.display = 'flex'
    inputIntento.style.opacity = '1'
    btnIntentar.style.opacity = '1'
}

function desactivarCampos(){
    mensaje.innerText = ''
    numeroSecreto.innerText = ''
    numeroSecreto.style.display = 'none'
    inputIntento.disabled = true
    btnIntentar.disabled = true
    inputIntento.style.cursor = 'not-allowed'
    btnIntentar.style.cursor = 'not-allowed'
    btnIntentar.style.opacity = '0.5'
    inputIntento.style.opacity = '0.5'
    contenedorIntentos.style.display = 'none'
}
function ocultarOpcioens(){
    inputIntento.style.display = 'none'
    btnIntentar.style.display = 'none'
    contenedorIntentos.style.display = 'none'
}
function mostrarOpciones(){
    inputIntento.style.display = 'block'
    btnIntentar.style.display = 'block'
    contenedorIntentos.style.display = 'flex'
    btnStart.style.display = 'block'
}
function mostrarNumero(randomNumber){
    numeroSecreto.style.display = 'block'
    numeroSecreto.innerText = randomNumber
}

//Definir rango de números para adivinar e inicializar contador de intentos, así como el número aleatorio, todo esto en variables específicas que posteriormente serán utilizadas
let min = 1
let max = 10
let count = 0;
let randomNumber

const contenedorIntentos = document.getElementById('contenedor-intentos')
const btnStart = document.getElementById('comenzar')
const intentos = document.getElementById('intentos')
const mensaje = document.getElementById('mensaje')
const numeroSecreto = document.getElementById('numero-secreto')
const btnIntentar = document.getElementById('btn-intentar')
const inputIntento = document.getElementById('input-intento')

enviarMensaje('¡Bienvenido!, presiona el botón "Comenzar" para poder jugar','blue',)
inputIntento.disabled = true
btnIntentar.disabled = true
btnIntentar.style.cursor = 'not-allowed'
inputIntento.style.cursor = 'not-allowed'
inputIntento.style.opacity = '0.5'
btnIntentar.style.opacity = '0.5'
contenedorIntentos.style.display = 'none'

btnStart.addEventListener('click', () => {
    generarNumero(min,max)
    btnStart.style.display = 'none'
    intentos.innerText = count
    enviarMensaje(`Intenta adivinar el número entre ${min} y ${max}`,'blue')
    activarCampos()
})
btnIntentar.addEventListener('click', () => {
    countFunc(true)
    const input = parseInt(inputIntento.value)

    if (isNaN(input)){
        enviarMensaje('Ingresa un número','orange')
    }
    if (input === randomNumber){
        enviarMensaje('Adivinaste el número en ' + count + ' intentos, este es el número secreto: ', 'green')
        mostrarNumero(randomNumber)
        ocultarOpciones()
        timeOut(true)
        countFunc(false)
        inputIntento.value=''
        return
    }else if(input > 10){
        enviarMensaje(`Ingresa un número entre ${min} y ${max}`, 'orange')
        timeOut(false)
    } else if(input < randomNumber){
        enviarMensaje('El número ingresado es menor al número secreto', 'red')
        timeOut(false)
    } else if(input > randomNumber){
        enviarMensaje('El número ingresado es mayor al número secreto', 'red')
        timeOut(false)
    }
    else{
        enviarMensaje('No adivinaste el número', 'red')
        timeOut(false)
    }
    inputIntento.value=''
})
