//Hearts
let cardAceHearts = [1, "Ace", "Hearts"];
let cardTwoHearts = [2, "Two", "Hearts"];
let cardThreeHearts = [3, "Three", "Hearts"];
let cardFourHearts = [4, "Four", "Hearts"];
let cardFiveHearts = [5, "Five", "Hearts"];
let cardSixHearts = [6, "Six", "Hearts"];
let cardSevenHearts = [7, "Seven", "Hearts"];
let cardEightHearts = [8, "Eight", "Hearts"];
let cardNineHearts = [9, "Nine", "Hearts"];
let cardTenHearts = [10, "Ten", "Hearts"];
let cardJackHearts = [10, "Jack", "Hearts"];
let cardQueenHearts = [10, "Queen", "Hearts"];
let cardKingHearts = [10, "King", "Hearts"];
//Diamonds
let cardAceDiamonds = [11, "Ace", "Diamonds"];
let cardTwoDiamonds = [2, "Two", "Diamonds"];
let cardThreeDiamonds = [3, "Three", "Diamonds"];
let cardFourDiamonds = [4, "Four", "Diamonds"];
let cardFiveDiamonds = [5, "Five", "Diamonds"];
let cardSixDiamonds = [6, "Six", "Diamonds"];
let cardSevenDiamonds = [7, "Seven", "Diamonds"];
let cardEightDiamonds = [8, "Eight", "Diamonds"];
let cardNineDiamonds = [9, "Nine", "Diamonds"];
let cardTenDiamonds = [10, "Ten", "Diamonds"];
let cardJackDiamonds = [10, "Jack", "Diamonds"];
let cardQueenDiamonds = [10, "Queen", "Diamonds"];
let cardKingDiamonds = [10, "King", "Diamonds"];
//Clubs
let cardAceClubs = [11, "Ace", "Clubs"];
let cardTwoClubs = [2, "Two", "Clubs"];
let cardThreeClubs = [3, "Three", "Clubs"];
let cardFourClubs = [4, "Four", "Clubs"];
let cardFiveClubs = [5, "Five", "Clubs"];
let cardSixClubs = [6, "Six", "Clubs"];
let cardSevenClubs = [7, "Seven", "Clubs"];
let cardEightClubs = [8, "Eight", "Clubs"];
let cardNineClubs = [9, "Nine", "Clubs"];
let cardTenClubs = [10, "Ten", "Clubs"];
let cardJackClubs = [10, "Jack", "Clubs"];
let cardQueenClubs = [10, "Queen", "Clubs"];
let cardKingClubs = [10, "King", "Clubs"];
//Spades
let cardAceSpades = [11, "Ace", "Spades"];
let cardTwoSpades = [2, "Two", "Spades"];
let cardThreeSpades = [3, "Three", "Spades"];
let cardFourSpades = [4, "Four", "Spades"];
let cardFiveSpades = [5, "Five", "Spades"];
let cardSixSpades = [6, "Six", "Spades"];
let cardSevenSpades = [7, "Seven", "Spades"];
let cardEightSpades = [8, "Eight", "Spades"];
let cardNineSpades = [9, "Nine", "Spades"];
let cardTenSpades = [10, "Ten", "Spades"];
let cardJackSpades = [10, "Jack", "Spades"];
let cardQueenSpades = [10, "Queen", "Spades"];
let cardKingSpades = [10, "King", "Spades"];

let allCards = [
    //Hearts
    cardAceHearts, cardTwoHearts, cardThreeHearts, cardFourHearts, cardFiveHearts, cardSixHearts, cardSevenHearts,
    cardEightHearts, cardNineHearts, cardTenHearts, cardJackHearts, cardQueenHearts, cardKingHearts,
    //Diamonds
    cardAceDiamonds, cardTwoDiamonds, cardThreeDiamonds, cardFourDiamonds, cardFiveDiamonds, cardSixDiamonds, cardSevenDiamonds,
    cardEightDiamonds, cardNineDiamonds, cardTenDiamonds, cardJackDiamonds, cardQueenDiamonds, cardKingDiamonds,
    //Clubs
    cardAceClubs, cardTwoClubs, cardThreeClubs, cardFourClubs, cardFiveClubs, cardSixClubs, cardSevenClubs,
    cardEightClubs, cardNineClubs, cardTenClubs, cardJackClubs, cardQueenClubs, cardKingClubs,
    //Spades
    cardAceSpades, cardTwoSpades, cardThreeSpades, cardFourSpades, cardFiveSpades, cardSixSpades, cardSevenSpades,
    cardEightSpades, cardNineSpades, cardTenSpades, cardJackSpades, cardQueenSpades, cardKingSpades
];

let playerCount = 0;
let dealerCount = 0
let playerAceCount = 0;
let dealerAceCount = 0;
let dealerOutput = document.querySelector('.dealerCount');
let playerOutput = document.querySelector('.playerCount');
let cardOutputDealer = document.querySelector('.cardDisplayDealer')
let cardOutputPlayer = document.querySelector('.cardDisplayPlayer')
let startButton = document.querySelector('#playButton');
let hitButton = document.querySelector('#hitButton');
let standButton = document.querySelector('#standButton');
let playerOutcome = document.querySelector('.playerOutcome');
let dealerOutcome = document.querySelector('.dealerOutcome');

function startGame() {
    playerStartCards();
    dealerStartCards();
    checkForTie();
    startButton.disabled = true
}
function playerStartCards(){
    let randomCard = allCards[Math.floor(Math.random()*allCards.length)];
    let randomCardTwo = allCards[Math.floor(Math.random()*allCards.length)];
    playerCount += randomCard[0];
    playerCount += randomCardTwo[0];
    playerOutput.innerHTML = playerCount;
    if (randomCard[1] === "Ace" || randomCardTwo[2] === "Ace") {
        playerAceCount++;
    }
    playerCount = checkForAce(playerCount, playerAceCount);
    cardOutputPlayer.innerHTML = `${randomCard[1]} of ${randomCard[2]}` + `, ${randomCardTwo[1]} of ${randomCardTwo[2]}`;
    if(playerCount === 21){
        playerOutcome.innerHTML = "Blackjack!";
        endGame();
    }
}
function dealerStartCards(){
    let randomCard = allCards[Math.floor(Math.random()*allCards.length)];
    let randomCardTwo = allCards[Math.floor(Math.random()*allCards.length)];
    dealerCount += randomCard[0];
    dealerCount += randomCardTwo[0];
    dealerOutput.innerHTML = dealerCount;
    if (randomCard[1] === "Ace" || randomCardTwo[2] === "Ace") {
        dealerAceCount++;
    }
    dealerCount = checkForAce(dealerCount, dealerAceCount);
    cardOutputDealer.innerHTML = `${randomCard[1]} of ${randomCard[2]}` + `, ${randomCardTwo[1]} of ${randomCardTwo[2]}`;
    if(dealerCount === 21){
        dealerOutcome.innerHTML = "Blackjack!";
        endGame();
    }
}
function cardCount() {
     let randomCard = allCards[Math.floor(Math.random()*allCards.length)];
        playerCount += randomCard[0];   
        playerOutput.innerHTML = playerCount;
        cardOutputPlayer.innerHTML += `, ${randomCard[1]} of ${randomCard[2]}`;
        if (randomCard[1] === "Ace") {
            playerAceCount++;
        }
        playerCount = checkForAce(playerCount, playerAceCount);
    if(playerCount === 21){
        playerOutcome.innerHTML = "You win!";
        endGame();
    }else if(playerCount > 21) {
        playerOutcome.innerHTML = "Bust!"
        endGame();
    };
}
function standCount() {
    let randomCard = allCards[Math.floor(Math.random()*allCards.length)];
        dealerCount += randomCard[0]; 
        dealerOutput.innerHTML = dealerCount;
        cardOutputDealer.innerHTML += `, ${randomCard[1]} of ${randomCard[2]}`;
        if (randomCard[1] === "Ace") {
            dealerAceCount++;
        }
        dealerCount = checkForAce(dealerCount, dealerAceCount);
        if(dealerCount === 21){
            dealerOutcome.innerHTML = "You win!";
            endGame();
        }else if(dealerCount > 21) {
            dealerOutcome.innerHTML = "Bust!";
            endGame();
        };
}
function restartGame(){
    playerCount = 0
    dealerCount = 0
    playerAceCount = 0;
    dealerAceCount = 0;
    dealerOutput.innerHTML = "";
    playerOutput.innerHTML = "";
    playerOutcome.innerHTML = "";
    dealerOutcome.innerHTML = "";
    cardOutputDealer.innerHTML = "";
    cardOutputPlayer.innerHTML = "";
    startButton.disabled = false;
    hitButton.disabled = false;
    standButton.disabled = false;
    
}
function checkForTie(){
    if(dealerCount === 21 && playerCount === 21){
        dealerOutcome.innerHTML = "Tie!";
        playerOutcome.innerHTML = "Tie";
    }else{
        return
    }
}
function endGame() {
    if(dealerCount >= 21 || playerCount >= 21){
        hitButton.disabled = true;
        standButton.disabled = true;
    }else{
        return
    }
}
function checkForAce(handTotal, aceCount) {
    while (handTotal > 21 && aceCount > 0) {
        handTotal -= 10;
        aceCount--;
    }
    return handTotal;
}

