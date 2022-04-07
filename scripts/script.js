let numberOfCards = Number(prompt("Com quantas cartas deseja jogar?"));
while (1) {
    if (numberOfCards % 2 == 0 && numberOfCards >= 4 && numberOfCards <= 16) {
        populate();
        break;
    }
    numberOfCards = Number(prompt("Com quantas cartas deseja jogar?"));
}

function populate() {
    let board = document.querySelector(".board ul");

    for (let i = 0; i < numberOfCards; i++) {
        board.innerHTML += `
        <li class="card">
            <div class="card-front">
                <img src="/images/front.png">
            </div>
            <div class="card-back">
            </div>
         </li>
        `
    }
}