// second version
// removed global variables and tried to clean up code-- changed playGame from recursive call to while loop for safety

const hands = ["rock", "paper", "scissors"];

function getHand(array) {
  let index = parseInt(Math.random() * 10) % 3;
  return array[index];
}

function playRound(player1, player2) {
  player1.hand = getHand(hands);
  player2.hand = getHand(hands);

  console.log(
    player1.name +
      " played " +
      player1.hand +
      "; " +
      player2.name +
      " played ." +
      player2.hand
  );

  if (player1.hand == player2.hand) {
    console.log("It's a tie.");
    return null;
  } else if (
    (player1.hand == "rock" && player2.hand == "scissors") ||
    (player1.hand == "scissors" && player2.hand == "paper") ||
    (player1.hand == "paper" && player2.hand == "rock")
  ) {
    console.log(player1.name + " won.");
    return player1;
  } else if (
    (player2.hand == "rock" && player1.hand == "scissors") ||
    (player2.hand == "scissors" && player1.hand == "paper") ||
    (player2.hand == "paper" && player1.hand == "rock")
  ) {
    console.log(player2.name + " won.");
    return player2;
  }
}

function playGame(player1, player2, playUntil) {
  let numWins1 = 0;
  let numWins2 = 0;
  let winner;

  while (numWins1 < playUntil && numWins2 < playUntil) {
    winner = playRound(player1, player2);
    if (winner == player1) {
      numWins1++;
    } else if (winner == player2) {
      numWins2++;
    }
  }
  console.log(winner.name + " is the game's winner.");
  return winner;
}

function playTournament(player1, player2, player3, player4, playUntil) {
  let winner1;
  let winner2;
  let finalWinner;

  winner1 = playGame(player1, player2, playUntil);
  winner2 = playGame(player3, player4, playUntil);
  finalWinner = playGame(winner1, winner2, playUntil);

  console.log(finalWinner.name + " is the world champion!");
}

let p1 = {
  name: "Jack",
  hand: getHand(hands),
};

let p2 = {
  name: "Dianne",
  hand: getHand(hands),
};

let p3 = {
  name: "Jessie",
  hand: getHand(hands),
};

let p4 = {
  name: "Jessie's Girl",
  hand: getHand(hands),
};

playTournament(p1, p2, p3, p4, 3);
