function init(){ 
    elements.roundNumber.innerText = configGame.round
    elements.player1Score.innerText = configGame.player1Score
    elements.player2Score.innerText = configGame.player2Score   
    elements.player1.style.display = 'none'
    elements.player2.style.display = 'none'
    elements.board.style.display = 'none'
    elements.information.style.display = 'none'
    elements.menu2.style.display = 'none'
    elements.start.style.display = 'none'
    elements.restart.style.display = 'none'
    elements.menu.style.display = 'none'
    elements.game.style.display = 'none'
    elements.initGame.style.display = 'flex'
}

function showMenu(menu, initGame){
    menu.style.display = 'flex'
    initGame.style.display = 'none'

}

function hiddeMenu(menu, initGame){
    menu.style.display = 'none'
}

function showGame(player1, player2, board, information, menu2, start, restart, multiplayer, singleplayer, rock, paper, scissors, scores,initGame, header, exit){
    elements.game.style.display = 'grid'
    player1.style.display = 'grid'
    player2.style.display = 'grid'
    information.style.display = 'grid'
    menu2.style.display = 'flex'
    start.style.display = 'block'
    restart.style.display = 'block'
    multiplayer.style.display = 'none'
    singleplayer.style.display = 'none'
    rock.style.display = 'block'
    paper.style.display = 'block'
    scissors.style.display = 'block'
    menu2.style.display = 'none'
    start.style.display = 'none'
    restart.style.display = 'none'
    exit.style.display = 'none'
    initGame.style.display = 'none'
    header.style.display = 'none'
    scores.style.display = 'flex'
}


//ALGORITMO PRINCIPAL

const configGame = {
    player1Score: 0,
    player2Score: 0,
    round: 0
}

const elements = {
    container: document.getElementById('container'),
    header: document.getElementById('header'),
    menu: document.getElementById('menu'),
    game: document.getElementById('game'),
    initGame: document.getElementById('init-game'),
    player1: document.getElementById('player-1'),
    player2: document.getElementById('player-2'),
    board: document.getElementById('board'),
    information: document.getElementById('information'),
    shift: document.getElementById('shift'),
    round: document.getElementById('round'),
    scores : document.getElementById('player-scores'),
    player1Score: document.getElementById('player-1-score'),
    player2Score: document.getElementById('player-2-score'),
    menu2: document.getElementById('menu-2'),
    start: document.getElementById('start'),
    restart: document.getElementById('restart'),
    exit: document.getElementById('exit'),
    exit2: document.getElementById('exit-2'),
    multiplayer: document.getElementById('multiplayer'),
    singleplayer: document.getElementById('singleplayer'),
    rock: document.getElementById('rock'),
    paper: document.getElementById('paper'),
    scissors: document.getElementById('scissors'),
    roundNumber: document.getElementById('round-number')
}

init()
elements.initGame.addEventListener('click', () => {
    showMenu(elements.menu, elements.initGame)
})
elements.multiplayer.addEventListener('click', () => {
    hiddeMenu(elements.menu, elements.initGame)
    showGame(elements.player1, elements.player2, elements.board, elements.information, elements.menu2, elements.start, elements.restart, elements.exit-2, elements.multiplayer, elements.singleplayer, elements.rock, elements.paper, elements.scissors, elements.scores, elements.initGame, elements.header, elements.exit, elements.exit2)
})
elements.exit.addEventListener('click', () => {
    init()
})
elements.exit2.addEventListener('click', () => {
    init()
})

