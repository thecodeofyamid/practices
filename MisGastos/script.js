const initialCoins = 20
let currentCoins = initialCoins
const piggyBanck = document.getElementById('piggy-bank')
const addCoin = document.getElementById('add-coins')
const coinsContainer = document.querySelector('.coins')
const coinValue = document.querySelector('.coin-value')

function jump(piggyBanck){
    piggyBanck.classList.toggle('jump')
    setTimeout(() => {
        piggyBanck.classList.remove('jump')
    }, 500)
}

function create_coin(coinsContainer,coinClass){
    const coin = document.createElement('div');
    coin.classList.add(`${coinClass}`);
    coinsContainer.appendChild(coin);
    setTimeout (() =>{
        coin.remove()
    }, 500)
}

function validation(currentCoins){
    if (currentCoins === 0){
        alert("¡Ya no tienes más monedas!")
        piggyBanck.disabled = true
        piggyBanck.style.cursor = 'not-allowed'
        piggyBanck.style.opacity = '0.5'
    }else if (currentCoins > 0){
        piggyBanck.disabled = false
        piggyBanck.style.cursor = 'pointer'
        piggyBanck.style.opacity = '1'
    }else{
        alert('Cantidad de monedas invalida')
    }
}


piggyBanck.addEventListener('click', () =>{
    //Cerdito salta
    jump(piggyBanck)

    //Crear moneda
    create_coin(coinsContainer, 'coin')

    //Actualizar valor y validar
    currentCoins--
    coinValue.textContent = currentCoins
    validation(currentCoins)
})
addCoin.addEventListener('click', ()=>{
    //Cerdito salta
    jump(piggyBanck)

    //Crear moneda
    create_coin(coinsContainer, 'coin-fall')

    //Actualizar valor y validar
    currentCoins++
    coinValue.textContent = currentCoins
    validation(currentCoins)
})