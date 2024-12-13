const container = document.getElementById("container");
const box = document.getElementById("box");
const content = document.getElementById("content");
const menu = document.getElementById("menu");
const init = document.getElementById("init");
const multiplayer = document.getElementById("multiplayer");
const vspc = document.getElementById("vspc");
const points = document.getElementById("points");
const exit = document.getElementById("exit");
const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.querySelector(".start");

let isStarted = false;

function startGame(){
    isStarted = true;
    
    setTimeout(function(){
        if(isStarted){
            button.style.display = "none";
            init.style.display = "none";
        }else{
            button.style.display = "block";
            init.style.display = "block";
        }
    }, 700);
    setInterval(function(){
        if(isStarted){
            button.style.display = "none";
            init.style.display = "none";
            menu.style.display = "block";
        }else{
            button.style.display = "block";
            init.style.display = "block";
            menu.style.display = "none";
        }
    }, 1000);
}

function Exit(){
    isStarted = false;
}