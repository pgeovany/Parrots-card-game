
let cardsBack = ["/images/bobrossparrot.gif", "/images/metalparrot.gif", "/images/explodyparrot.gif", "/images/fiestaparrot.gif", "/images/revertitparrot.gif", "/images/tripletsparrot.gif", "/images/unicornparrot.gif"];

let flippedCards = [];
let count = 0;

cardsBack.sort(comparison);

let numberOfCards = Number(prompt("Com quantas cartas você deseja jogar? (Insira um número par entre 4 e 14.)"));

while (1) {
    if (numberOfCards % 2 == 0 && numberOfCards >= 4 && numberOfCards <= 14) {
        populate();
        break;
    }
    numberOfCards = Number(prompt("Com quantas cartas deseja jogar?"));
}

function comparison() {
    return Math.random() - 0.5;
}

function populate() {
    let board = document.querySelector(".board ul");
    let backFace = randomize();
 
    for (let i = 0; i < numberOfCards; i++) {
        board.innerHTML += `
        <li onclick="flip(this)" class="card">
            <div class="front-face face">
                <img src="/images/front.png" />
            </div>
            <div class="back-face face">
                <img src="${backFace[i]}" />
            </div>
        </li>
        `
    }
}

function randomize() {
    let newArray = cardsBack.slice(0, (numberOfCards/2));
    for (let i = 0; i < (numberOfCards/2); i++) {
        newArray.push(newArray[i]);
    }
    return newArray.sort(comparison);
}

function flip (element) {
    if(document.querySelectorAll(".flipped").length/2 < 2) {
        flippedCards.push({element: element, flipped: 'true', back: element.querySelector(".back-face>img").getAttribute("src")});
        element.querySelector(".front-face.face").classList.add("flipped");
        element.querySelector(".back-face.face").classList.add("flipped");
        if (flippedCards.length % 2 === 0) {
            if(flippedCards[flippedCards.length-2].back === flippedCards[flippedCards.length-1].back){
                console.log("equal");
                console.log(flippedCards);
            } else {setTimeout(unflip, 1000);}
        } 
    }
}

function unflip() {
    flippedCards[flippedCards.length-2].element.querySelector(".front-face.face").classList.remove("flipped");
    flippedCards[flippedCards.length-2].element.querySelector(".back-face.face").classList.remove("flipped");

    flippedCards[flippedCards.length-1].element.querySelector(".front-face.face").classList.remove("flipped");
    flippedCards[flippedCards.length-1].element.querySelector(".back-face.face").classList.remove("flipped");

    flippedCards.length = flippedCards.length-2;
}