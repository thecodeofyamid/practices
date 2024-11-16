function init(){ 
    elements.board.style.display = 'none'
    elements.game.style.display = 'none'
    elements.information.style.display = 'none'
    elements.initGame.style.display = 'flex'
    elements.menu.style.display = 'none'
    elements.menu2.style.display = 'none'
    elements.player1.style.display = 'none'
    elements.player1Score.innerText = configGame.player1Score
    elements.player2.style.display = 'none'
    elements.player2Score.innerText = configGame.player2Score   
    elements.restart.style.display = 'none'
    elements.roundNumber.innerText = configGame.round
    elements.start.style.display = 'none'
}

function showMenu(menu, initGame){
    menu.style
    
    .display = 'flex'
    initGame.style.display = 'none'

}

function hiddeMenu(menu, initGame){
    menu.style.display = 'none'
}

function showGame(player1, player2, board, information, menu2, start, restart, multiplayer, singleplayer, rock, paper, scissors, scores,initGame, header, exit){
    elements.game.style.display = 'grid'
    exit.style.display = 'none'
    header.style.display = 'none'
    information.style.display = 'grid'
    initGame.style.display = 'none'
    menu2.style.display = 'flex'
    menu2.style.display = 'none'
    multiplayer.style.display = 'none'
    paper.style.display = 'block'
    player1.style.display = 'grid'
    player2.style.display = 'grid'
    restart.style.display = 'block'
    restart.style.display = 'none'
    rock.style.display = 'block'
    scissors.style.display = 'block'
    scores.style.display = 'flex'
    singleplayer.style.display = 'none'
    start.style.display = 'block'
    start.style.display = 'none'
}


//ALGORITMO PRINCIPAL

const configGame = {
    player1Score: 0,
    player2Score: 0,
    round: 0
}

const elements = {
    board: document.getElementById('board'),
    container: document.getElementById('container'),
    exit: document.getElementById('exit'),
    exit2: document.getElementById('exit-2'),
    game: document.getElementById('game'),
    header: document.getElementById('header'),
    information: document.getElementById('information'),
    initGame: document.getElementById('init-game'),
    menu: document.getElementById('menu'),
    menu2: document.getElementById('menu-2'),
    multiplayer: document.getElementById('multiplayer'),
    paper: document.getElementById('paper'),
    player1: document.getElementById('player-1'),
    player1Score: document.getElementById('player-1-score'),
    player2: document.getElementById('player-2'),
    player2Score: document.getElementById('player-2-score'),
    restart: document.getElementById('restart'),
    rock: document.getElementById('rock'),
    round: document.getElementById('round'),
    roundNumber: document.getElementById('round-number'),
    scissors: document.getElementById('scissors'),
    scores : document.getElementById('player-scores'),
    shift: document.getElementById('shift'),
    singleplayer: document.getElementById('singleplayer'),
    start: document.getElementById('start'),
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

