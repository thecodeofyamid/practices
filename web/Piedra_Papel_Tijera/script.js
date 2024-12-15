const elements = {
    container: document.getElementById("container"),
    box: document.getElementById("box"),
    content: document.getElementById("content"),
    menu: document.getElementById("menu"),
    init: document.getElementById("init"),
    multiplayer: document.getElementById("multiplayer"),
    vspc: document.getElementById("vspc"),
    points: document.getElementById("points"),
    exit: document.getElementById("exit"),
    title: document.getElementById("title"),
    text: document.getElementById("text"),
    button: document.querySelector(".start")
}

let isStarted = false;

function startGame(){
    isStarted = true;
    
    setTimeout(function(){
        if(isStarted){
            elements.button.style.display = "none";
            elements.init.style.display = "none";
        }else{
            elements.button.style.display = "block";
            elements.init.style.display = "block";
        }
    }, 700);
    setInterval(function(){
        if(isStarted){
            elements.button.style.display = "none";
            elements.init.style.display = "none";
            elements.menu.style.display = "block";
        }else{
            elements.button.style.display = "block";
            elements.init.style.display = "block";
            elements.menu.style.display = "none";
        }
    }, 1000);
}

function Exit(){
    isStarted = false;
}