let cardsBack = ["/images/bobrossparrot.gif", "/images/metalparrot.gif", "/images/explodyparrot.gif", "/images/fiestaparrot.gif", "/images/revertitparrot.gif", "/images/tripletsparrot.gif", "/images/unicornparrot.gif"];

cardsBack.sort(comparison);

let numberOfCards = Number(prompt("Com quantas cartas você deseja jogar? (Insira um número par entre 4 e 14.)"));

while (1) {
    if (numberOfCards % 2 == 0 && numberOfCards >= 4 && numberOfCards <= 14) {
        populate();
        break;
    }
    numberOfCards = Number(prompt("Com quantas cartas deseja jogar?"));
}

function populate() {
    let board = document.querySelector(".board ul");
    let backFace = randomize();
 
    for (let i = 0; i < numberOfCards; i++) {
        board.innerHTML += `
        <li class="card">
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

function comparison() {
    return Math.random() - 0.5;
}