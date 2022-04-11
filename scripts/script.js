
let cardsBack = ["/images/bobrossparrot.gif", "/images/metalparrot.gif", "/images/explodyparrot.gif", "/images/fiestaparrot.gif", "/images/revertitparrot.gif", "/images/tripletsparrot.gif", "/images/unicornparrot.gif"];

let flippedCards = [];
let count = 0;
let clicks = 0;
let timer = -1;
let idInterval  = setInterval(increaseTimer, 1000);

function increaseTimer () {
    timer++;
    document.querySelector(".timer").innerHTML = timer;
}

cardsBack.sort(comparison);
let numberOfCards = Number(prompt("Com quantas cartas você deseja jogar? (Insira um número par entre 4 e 14.)"));

function startGame() {
    while (1) {
        if (numberOfCards % 2 == 0 && numberOfCards >= 4 && numberOfCards <= 14) {
            populate();
            break;
        }
        numberOfCards = Number(prompt("Com quantas cartas você deseja jogar? (Insira um número par entre 4 e 14.)"));
    }
}

startGame();
increaseTimer();

function comparison() {
    return Math.random() - 0.5;
}

function populate() {
    let board = document.querySelector(".board ul");
    let auxArray = getCardsBack();
 
    for (let i = 0; i < numberOfCards; i++) {
        board.innerHTML += `
        <li onclick="flip(this)" class="card">
            <div class="front-face face">
                <img src="/images/front.png" />
            </div>
            <div class="back-face face">
                <img src="${auxArray[i]}" />
            </div>
        </li>
        `
    }
}

function getCardsBack() {
    let auxArray = cardsBack.slice(0, (numberOfCards/2));
    for (let i = 0; i < (numberOfCards/2); i++) {
        auxArray.push(auxArray[i]);
    }
    return auxArray.sort(comparison);
}

function flip (element) {
    clicks++;
    if(count <= 2) {
        flippedCards.push({element: element, back: element.querySelector(".back-face>img").getAttribute("src")});

        element.querySelector(".front-face.face").classList.add("flipped");
        element.querySelector(".back-face.face").classList.add("flipped");

        if (flippedCards.length % 2 === 0) {
            if(flippedCards[flippedCards.length-2].back === flippedCards[flippedCards.length-1].back){
                count = 0;
                unclickable();
                gameOver();
            } else {
                count = 0;
                setTimeout(unflip, 1000);
            }
        }
        count++;
        unclickable();
    }
}

function unflip() {
    flippedCards[flippedCards.length-2].element.querySelector(".front-face.face").classList.remove("flipped");
    flippedCards[flippedCards.length-2].element.querySelector(".back-face.face").classList.remove("flipped");
    flippedCards[flippedCards.length-2].element.setAttribute("onclick", "flip(this)");

    flippedCards[flippedCards.length-1].element.querySelector(".front-face.face").classList.remove("flipped");
    flippedCards[flippedCards.length-1].element.querySelector(".back-face.face").classList.remove("flipped");
    flippedCards[flippedCards.length-1].element.setAttribute("onclick", "flip(this)");

    flippedCards.length = flippedCards.length-2;
}

function gameOver() {
    if (flippedCards.length === numberOfCards) {
        alert(`Parabéns! Você venceu em ${clicks} jogadas e em incríveis ${timer} segundos!`);
        let answer = prompt("Deseja jogar novamente? ('sim' ou 'não')");
        if (answer === 'sim') {
            clear();
            startGame();
            idInterval  = setInterval(increaseTimer, 1000);
        } else {
            alert("Ok! Obrigado por jogar!");
            clearInterval(idInterval);
        }
    }
}

function clear() {
    numberOfCards = Number(prompt("Com quantas cartas você deseja jogar? (Insira um número par entre 4 e 14.)"));
    document.querySelector(".board ul").innerHTML = "";
    clearInterval(idInterval);
    flippedCards = [];
    clicks = 0;
    timer = 0; 
    document.querySelector(".timer").innerHTML = 0;
}

//Cards that have already been flipped, won't call the 'flip' function on click anymore.
function unclickable () {
    for(let i = 0; i < flippedCards.length; i++) {
        flippedCards[i].element.removeAttribute("onclick");
        console.log(flippedCards);
    }
}