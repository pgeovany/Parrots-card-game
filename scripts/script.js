let numberOfCards = Number(prompt("Com quantas cartas deseja jogar?"));

while(1) {
   if(numberOfCards % 2 == 0 && numberOfCards >= 4 && numberOfCards <= 16){
       break;
   }
   numberOfCards = Number(prompt("Com quantas cartas deseja jogar?"));
}

populate();

function populate() {
    
}