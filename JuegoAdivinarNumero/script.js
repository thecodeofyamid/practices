function init(){
    sendMessage('Welcome! Press the "Start" button to play','blue',)
    elements.attemptInput.disabled = true
    elements.tryButton.disabled = true
    elements.tryButton.style.cursor = 'not-allowed'
    elements.attemptInput.style.cursor = 'not-allowed'
    elements.attemptInput.style.opacity = '0.5'
    elements.tryButton.style.opacity = '0.5'
    elements.attemptsContainer.style.display = 'none'
}

function generateNumber(min,max, randomNumber) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    console.log( randomNumber)
    return randomNumber
}

function sendMessage(contenido,color) {
    elements.message.innerHTML = `<h3 class="message">${contenido}</h3>`
    elements.message.style.color = color
}

function counterFunction(boolean){
    if (boolean){
        gameConfig.count++
    } else{
        gameConfig.count = 0
    }
    elements.attempts.innerText = gameConfig.count
}

function timeOut(boolean) {
    if (boolean){
        setTimeout(() => {
            disableFields()
        }, 5000);
        setTimeout(() => {
            showOptions()
        }, 6000);
        return
    } else{
        setTimeout(() => {
            sendMessage(`Intenta adivinar el número entre ${gameConfig.min} y ${gameConfig.max}`, 'blue')
        }, 3000);
        return
    }  
}

function enableFields() {
    elements.attemptInput.disabled = false
    elements.tryButton.disabled = false
    elements.attemptInput.style.cursor = 'pointer'
    elements.tryButton.style.cursor = 'pointer'
    elements.attemptsContainer.style.display = 'flex'
    elements.attemptInput.style.opacity = '1'
    elements.tryButton.style.opacity = '1'
}

function disableFields(){
    elements.message.innerText = ''
    elements.secretNumber.innerText = ''
    elements.secretNumber.style.display = 'none'
    elements.attemptInput.disabled = true
    elements.tryButton.disabled = true
    elements.attemptInput.style.cursor = 'not-allowed'
    elements.tryButton.style.cursor = 'not-allowed'
    elements.tryButton.style.opacity = '0.5'
    elements.attemptInput.style.opacity = '0.5'
    elements.attemptsContainer.style.display = 'none'
}

function hideOptions(){
    elements.attemptInput.style.display = 'none'
    elements.tryButton.style.display = 'none'
    elements.attemptsContainer.style.display = 'none'
}

function showOptions(){
    init()
    elements.attemptInput.style.display = 'block'
    elements.tryButton.style.display = 'block'
    elements.playButton.style.display = 'block'
}

function showNumber(randomNumber){
    elements.secretNumber.style.display = 'block'
    elements.secretNumber.innerHTML = `<h3>${randomNumber}</h3>`
}

function formatInput(attemptInput){
    attemptInput.value=''
}

//ALGORITMO PRINCIPAL
let randomNumber
const gameConfig = {
    min: 1,
    max: 10,
    count: 0,  
    randomNumber: null
}

const elements = {
    message: document.getElementById('message'),
    secretNumber: document.getElementById('secret-number'),
    tryButton: document.getElementById('try-button'),
    attemptInput: document.getElementById('attempt-input'),
    attemptsContainer: document.getElementById('attempts-container'),
    attempts: document.getElementById('attempts'),
    playButton: document.getElementById('play-button')
}

init()
elements.playButton.addEventListener('click', () => {
    randomNumber = generateNumber(gameConfig.min, gameConfig.max, gameConfig.randomNumber)
    elements.playButton.style.display = 'none'
    elements.attempts.innerText = gameConfig.count
    sendMessage(`Try to guess the number between ${gameConfig.min} and ${gameConfig.max}`,'blue')
    enableFields()
})
elements.tryButton.addEventListener('click', () => {
    counterFunction(true)
    const input = parseInt(elements.attemptInput.value)
    console.log(input)

    if (isNaN(input)){
        sendMessage('Enter a number','orange')
    }
    if (input === randomNumber){
        sendMessage('You guessed the number in ' + gameConfig.count + ' attempts, this is the secret number: ', 'green')
        showNumber(randomNumber)
        hideOptions()
        timeOut(true)
        counterFunction(false)
        formatInput(elements.attemptInput)
        return
    }else if(input > 10){
        sendMessage(`Enter a number between ${gameConfig.min} and ${gameConfig.max}`, 'orange')
        timeOut(false)
    } else if(input < randomNumber){
        sendMessage('The entered number is lower than the secret number', 'red')
        timeOut(false)
    } else if(input > randomNumber){
        sendMessage('The entered number is higher than the secret number', 'red')
        timeOut(false)
    }
    else{
        sendMessage('You did not guess the number', 'red')
        timeOut(false)
    }
    formatInput(elements.attemptInput)
})
