// How blackjack works?
// the point of blackjack is to get a hand that sums up to exactly 21
// But if you don't get 21, at least you need to get at as close to 21 as possible
// But never above 21, because if so, you are out of the game.
// So, there are three senarios, 21, less than 21, greater than 21.
let firstCard = 0;
let secondCard = 0;
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let card;
let playerEl = document.getElementById('player-el');
let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");
let playAgainBtn = document.getElementById("play-again-btn");
let gameOver = document.getElementById('game-over');

let player = {
    name: "Yusra",
    credit: 145
}
playerEl.textContent = player.name + ": $" + player.credit;
function startGame()
{
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}
function renderGame()
{
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++)
    {
        cardEl.textContent += cards[i] + " ";
    }
    if (sum < 21)
    {
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21)
    {
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
        endGame();
    }
    else
    {
        message = "Ops! You're out of the Game!";
        isAlive = false;
        endGame();
    }
    messageEl.textContent = message;
}
function newCard()
{
    if(isAlive === true && hasBlackjack === false)
    {
        card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; // 1-13

    if (randomNumber > 10) {
        return 10; 
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}
function endGame() {
    startBtn.style.display = "none";
    newCardBtn.style.display = "none";
    playAgainBtn.style.display = "inline-block";
    gameOver.style.display = "inline-block";
}
function resetGame() {
    location.reload();
}