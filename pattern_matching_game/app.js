const message = document.querySelector(".message");
const gamearea = document.querySelector('.gamearea');
const button = document.querySelector('button');
const gameColors = ['red', 'blue', 'green', 'yellow'];
let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 1;


button.addEventListener("click", function() {
    if(!inPlay) {
        player();
    }
});

function player() {
    button.disabled = true;
    gameClicks = [];
    userClicks = [];
    runSequence();
}

function runSequence() {
    inPlay = true;
}

window.addEventListener("load", setup);

function setup() {
    for(let x = 0; x < gameColors.length; x++) {
        let div = eleFactory("div");
        div.style.backgroundColor = gameColors[x];
        div.classList.add("box");
        div.style.opacity = "0.5";
        div.myColor = gameColors[x];
        div.addEventListener("click", checkAnswer);
        gamearea.appendChild(div);
    }
}

function eleFactory(elType) {
    let ele = document.createElement(elType);
    return ele;
}

function checkAnswer(e) {
    if(inPlay) {
        let el = e.target;
        userClicks.push(el.myColor);
        el.style.opacity = "1";
        setTimeout(function() {
            el.style.opacity = "0.5";
        }, 500);
    }
}