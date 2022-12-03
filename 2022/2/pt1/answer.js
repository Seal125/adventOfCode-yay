const fs = require('fs');

const input = fs.readFileSync('../input.txt').toString();
const lines = input.split(/\r?\n/);

const calculateTotalScore = (rounds) => {
  const move = {
    oppRock: 'A',
    oppPaper: 'B',
    oppScissors: 'C',
    rock: 'X',
    paper: 'Y',
    scissors: 'Z',
  };
  const scoring = {
    rockScore: 1,
    paperScore: 2,
    scissorScore: 3,
    winScore: 6,
    drawScore: 3,
    loseScore: 0,
  };
  let totalScore = 0;

  rounds.forEach((round) => {
    roundMoves = round.split(' ');

    if (roundMoves[0] === move.oppRock) {
      if (roundMoves[1] === move.rock) {
        totalScore += scoring.rockScore;
        totalScore += scoring.drawScore;
      } else if (roundMoves[1] === move.paper) {
        totalScore += scoring.paperScore;
        totalScore += scoring.winScore;
      } else {
        totalScore += scoring.scissorScore;
        totalScore += scoring.loseScore;
      }
    }

    if (roundMoves[0] === move.oppPaper) {
      if (roundMoves[1] === move.rock) {
        totalScore += scoring.rockScore;
        totalScore += scoring.loseScore;
      } else if (roundMoves[1] === move.paper) {
        totalScore += scoring.paperScore;
        totalScore += scoring.drawScore;
      } else {
        totalScore += scoring.scissorScore;
        totalScore += scoring.winScore;
      }
    }

    if (roundMoves[0] === move.oppScissors) {
      if (roundMoves[1] === move.rock) {
        totalScore += scoring.rockScore;
        totalScore += scoring.winScore;
      } else if (roundMoves[1] === move.paper) {
        totalScore += scoring.paperScore;
        totalScore += scoring.loseScore;
      } else {
        totalScore += scoring.scissorScore;
        totalScore += scoring.drawScore;
      }
    }
  });

  return totalScore;
};

console.log(`Strategy guide total score: ${calculateTotalScore(lines)}`);

/*
Generally with rock paper scissor problems, I find that there are a lot
of if statements. Making objects with the scoring and the move meanings
helped me organize what they were going to be scored for and 
what they were playing for the round, and somewhat organizes the if statements
for me. I separated the input by row, to focus on each round and add up
the total score with each passing round using a loop.
*/
