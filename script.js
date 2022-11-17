var score = {
  wins: 0,
  ties: 0,
  losses: 0
};

var userPick, compPick;

function pickRand() {
  let pick = ['r','p','s'][Math.floor(Math.random() * 3)];
  let opp = {losesTo: '', beats: ''};
  switch (pick) {
    case 'r':
      opp.losesTo = 'p';
      opp.beats = 's';
      break;

    case 'p':
      opp.losesTo = 's'
      opp.beats = 'r'
      break;

    case 's':
      opp.losesTo = 'r'
      opp.beats = 'p'
      break;
  }
  return opp;
}

function userPicks() {
  return prompt('Rock (r), Paper (p), or Scissors (s)?').charAt(0).toLowerCase();
}

function runGame() {
  let userPick = userPicks();
  let opp = pickRand();
  let resultString = '';

  if (userPick == opp.losesTo) {
    score.wins++;
    resultString = `You win!`;
  } else if (userPick == opp.beats) {
    score.losses++;
    resultString = 'You lost, sorry.';
  } else {
    score.ties++;
    resultString = `Wow, it's a tie!`;
  }

  alert(`${resultString} That's ${score.wins} wins, ${score.losses} losses, and ${score.ties} ties`);
  if (confirm('Want to play again?')) {
    runGame();
  }
}

alert("We're going to play rock paper scissors!");
runGame();
