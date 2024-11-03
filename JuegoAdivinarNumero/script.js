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
inputIntento.disabled = true
btnIntentar.disabled = true
btnIntentar.style.cursor = 'not-allowed'
inputIntento.style.cursor = 'not-allowed'
inputIntento.style.opacity = '0.5'
btnIntentar.style.opacity = '0.5'
contenedorIntentos.style.display = 'none'

function EnviarMensaje(contenido,color){
    mensaje.innerText = contenido
    mensaje.style.color = color
}

btnStart.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNumber)
    intentos.innerText = count
    EnviarMensaje(`Intenta adivinar el número entre ${min} y ${max}`,'black')
    inputIntento.value=''
    inputIntento.disabled = false
    btnIntentar.disabled = false
    btnIntentar.style.cursor = 'pointer'
    inputIntento.style.cursor = 'pointer'
    contenedorIntentos.style.display = 'flex'
    inputIntento.style.opacity = '1'
    btnIntentar.style.opacity = '1'
})

btnIntentar.addEventListener('click', () => {
    const input = parseInt(inputIntento.value)
    if (isNaN(input)){
        EnviarMensaje('Ingresa un número','orange')
        return
    }
    count++
    intentos.innerText = count

    if (input === randomNumber){
        EnviarMensaje('Adivinaste el número en ' + count + ' intentos', 'green')
        numeroSecreto.style.display = 'block'
        numeroSecreto.innerText = randomNumber
        inputIntento.style.display = 'none'
        btnIntentar.style.display = 'none'
        contenedorIntentos.style.display = 'none'
        btnIntentar.style.opacity = '0.5'
        inputIntento.style.opacity = '0.5'
        setTimeout(() => {
            mensaje.innerText = ''
            numeroSecreto.innerText = ''
            numeroSecreto.style.display = 'none'
            inputIntento.disabled = true
            btnIntentar.disabled = true
            inputIntento.style.cursor = 'not-allowed'
            btnIntentar.style.cursor = 'not-allowed'
            contenedorIntentos.style.display = 'flex'
            inputIntento.style.display = 'flex'
            btnIntentar.style.display = 'flex'
        }, 2000);   
        mensaje.style.color = 'green'
        count = 0
        intentos.innerText = `${count}`
    }else if(input > 10){
        mensaje.innerText = `Ingresa un número entre ${min} y ${max}`
        mensaje.style.color = 'orange'
    }
    else{
        mensaje.innerText = 'No adivinaste el número'
        setTimeout(() => {
            mensaje.innerText = ''
        }, 2000);
        mensaje.style.color = 'red'
    }
    inputIntento.value=''
    
})
