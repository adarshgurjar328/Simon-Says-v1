h = prompt(`Utkarsh & Yush tumhare lia nhi ha ye tum nikal lo 🖕`);
let gameseq = [];
let userseq = [];
let started = false;
let lvl = 0;

let btns = [
    "yellow",
    "red",
    "blue",
    "purple",
    "orange",
    "cyan",
    "marron",
    "green",
    "lime"
];
let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
    if (started == false) {
        console.log("Game Started");
        // reset 
        lvl = 0;
        gameseq = [];
        userseq = [];
        started = true;
        Levelup();
    }
});

function userFlash(btn) {
    btn.classList.add("userFlash");

    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 270);
}

function gameFlash(btn) {
    btn.classList.add("Flash");

    setTimeout(function () {
        btn.classList.remove("Flash");
    }, 270);
}

function Levelup() {
    lvl++;

    h2.innerText = `Level ${lvl}`;

    let randomId = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randomId];

    gameseq.push(randcolor);

    console.log(gameseq);

    for (let i = 0; i < gameseq.length; i++) {

        setTimeout(function () {

            let randbtn = document.querySelector(`.${gameseq[i]}`);

            gameFlash(randbtn);

        }, i * 500);
    }
}

function checkanswer() {

    console.log(`curr level : ${lvl}`);

    let idx = userseq.length - 1;

    if (userseq[idx] === gameseq[idx]) {

        if (userseq.length == gameseq.length) {
            setTimeout(Levelup,1000);
            userseq = [];
            
        }

        console.log("same value");

    } else {
        document.body.classList.add("gameover");
        setTimeout(function (){
            document.body.classList.remove("gameover");
        }, 300);

        h2.innerText = `Game over! Press any key to start`;
        started = false;
    }
}

function btnpress() {
    if(started == false){
        lvl = 0;
        started = true;
        gameseq = [];
        userseq = [];
        Levelup();
        return;
    }

    console.log("button was pressed");

    let btn = this;

    userFlash(btn);

    // 🔥 YAHAN ACTUAL FIX HAI
    let usercolor = btn.classList[1];

    userseq.push(usercolor);

    console.log(usercolor);

    checkanswer();
}

let allbtns = document.querySelectorAll(".btn");

for (let button of allbtns) {
    button.addEventListener("click", btnpress);
}