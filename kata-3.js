const cards = [2,3,4,5,6,7,8,9,"T","J","Q","K","A"];
const suit = ["S", "H", "C", "D"];

let player1 = [];
let player2 = [];

const numberOfCardsInHand = 5;
let areCardsRepeated = false;

const checkHighCards = () => {
    for (let index = 0; index < numberOfCardsInHand; index++) {
        firstCharOfPlayer1Card = player1[index].charAt(0);
        firstCharOfPlayer2Card = player2[index].charAt(0);
        if(firstCharOfPlayer1Card == "A" && firstCharOfPlayer2Card != "A"){
            console.log("Player 1 won");
            break;
        }
        if(firstCharOfPlayer2Card == "A" && firstCharOfPlayer1Card != "A"){
            console.log("Player 2 won");
            break;
        }
        if(firstCharOfPlayer1Card == "K" && firstCharOfPlayer2Card != "K"){
            console.log("Player 1 won");
            break;
        }
        if(firstCharOfPlayer2Card == "K" && firstCharOfPlayer1Card != "K"){
            console.log("Player 2 won");
            break;
        }
        if(firstCharOfPlayer1Card == "Q" && firstCharOfPlayer2Card != "Q"){
            console.log("Player 1 won");
            break;
        }
        if(firstCharOfPlayer2Card == "Q" && firstCharOfPlayer1Card != "Q"){
            console.log("Player 2 won");
        }
        if(firstCharOfPlayer1Card == "J" && firstCharOfPlayer2Card != "J"){
            console.log("Player 1 won");
            break;
        }
        if(firstCharOfPlayer2Card == "J" && firstCharOfPlayer1Card != "J"){
            console.log("Player 2 won");
            break;
        }
        if(firstCharOfPlayer1Card == "T" && firstCharOfPlayer2Card != "T"){
            console.log("Player 1 won");
            break;
        }
        if(firstCharOfPlayer2Card == "T" && firstCharOfPlayer1Card != "T"){
            console.log("Player 2 won");
            break;
        }
        if(firstCharOfPlayer1Card > firstCharOfPlayer2Card){
            console.log("Player 1 won");
            break;
        }
        if(firstCharOfPlayer2Card > firstCharOfPlayer1Card){
            console.log("Player 2 won");
            break;
        }
    }
}

const dealCards = () => {
    for (let index = 0; index <= numberOfCardsInHand; index++) {
        player1.push(cards[Math.floor(Math.random()*cards.length)]);
        player1[index] += suit[Math.floor(Math.random()*suit.length)];

        player2.push(cards[Math.floor(Math.random()*cards.length)]);
        player2[index] += suit[Math.floor(Math.random()*suit.length)];
        
        if(player1[index] == player1[index-1] || player1[index] == player1[index-2] || player1[index] == player1[index-3] || player1[index] == player1[index-4] || player1[index] == player1[index-5]){
            areCardsRepeated = true;
        }

        if(player2[index] == player2[index-1] || player2[index] == player2[index-2] || player2[index] == player2[index-3] || player2[index] == player2[index-4] || player2[index] == player2[index-5]){
            areCardsRepeated = true;
        }

        if(areCardsRepeated === true){
            player1 = [];
            player2 = [];
            for (let index = 0; index < numberOfCardsInHand; index++) {
                player1.push(cards[Math.floor(Math.random()*cards.length)]);
                player1[index] += suit[Math.floor(Math.random()*suit.length)];

                player2.push(cards[Math.floor(Math.random()*cards.length)]);
                player2[index] += suit[Math.floor(Math.random()*suit.length)];   
            }   
        }
    }
    checkHighCards();
}
dealCards();
console.log(`player1: ${player1}`);
console.log(`Player2: ${player2}`);
