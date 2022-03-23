///FIRST VERSION
//CONTAINS GLOBAL VARIABLES
//AND A LOT OF MESSINESS


const hands = ['rock' , 'paper', 'scissors'];
let winner = null;
let numWins1 = 0;
let numWins2 = 0;

function getHand(array) {
    let index = parseInt(Math.random()*10)%3;
    return array[index];
}

let player1 = {
    name: 'Jack',
    hand: getHand(hands)
}

let player2 = {
    name: 'Dianne',
    hand: getHand(hands)
}

function playRound(player1, player2) {
    player1.hand = getHand(hands);
    player2.hand = getHand(hands);

    if (player1.hand == player2.hand) {
        console.log("It's a tie")
    } else if ((player1.hand == 'rock' && player2.hand == 'scissors') || (player1.hand=='scissors' && player2.hand == 'paper')|| (player1.hand=='paper' && player2.hand=='rock')) {
        winner = player1.name;
    } else if ((player2.hand == 'rock' && player1.hand == 'scissors') || (player2.hand=='scissors' && player1.hand == 'paper') || (player2.hand=='paper' && player1.hand=='rock')) {
        winner = player2.name;
    }
    console.log(player1.name + " played " + player1.hand + ", " + player2.name + " played " + player2.hand)
    console.log("Winner is: " + winner);

}

function playGame(player1, player2, playUntil) {
    if (numWins1 == playUntil || numWins2 == playUntil) {
        console.log("Game's winner is " + winner);
        return winner;
    } else {
        playRound(player1, player2);
        if (winner == player1.name) {
            numWins1++;
        } else if (winner == player2.name) {
            numWins2++;
        }
    }
    playGame(player1, player2, playUntil);
}

console.log(playGame(player1, player2, 5));
