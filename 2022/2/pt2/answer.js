const fs = require('fs');

const input = fs.readFileSync('../input.txt').toString();
const lines = input.split(/\r?\n/);

const calculateTotalScore = (rounds) => {
  const move = {
    oppRock: 'A',
    oppPaper: 'B',
    oppScissors: 'C',
    lose: 'X',
    draw: 'Y',
    win: 'Z',
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
      if (roundMoves[1] === move.lose) {
        totalScore += scoring.scissorScore;
        totalScore += scoring.loseScore;
      } else if (roundMoves[1] === move.draw) {
        totalScore += scoring.rockScore;
        totalScore += scoring.drawScore;
      } else {
        totalScore += scoring.paperScore;
        totalScore += scoring.winScore;
      }
    }

    if (roundMoves[0] === move.oppPaper) {
      if (roundMoves[1] === move.lose) {
        totalScore += scoring.rockScore;
        totalScore += scoring.loseScore;
      } else if (roundMoves[1] === move.draw) {
        totalScore += scoring.paperScore;
        totalScore += scoring.drawScore;
      } else {
        totalScore += scoring.scissorScore;
        totalScore += scoring.winScore;
      }
    }

    if (roundMoves[0] === move.oppScissors) {
      if (roundMoves[1] === move.lose) {
        totalScore += scoring.paperScore;
        totalScore += scoring.loseScore;
      } else if (roundMoves[1] === move.draw) {
        totalScore += scoring.scissorScore;
        totalScore += scoring.drawScore;
      } else {
        totalScore += scoring.rockScore;
        totalScore += scoring.winScore;
      }
    }
  });

  return totalScore;
};

console.log(`Strategy guide total score: ${calculateTotalScore(lines)}`);

/*
The only changes I needed to make from the answer to part 1 was to change
the meaning of the second column's values, as well as what scores to use
and what moves to make. Thus, if we have to lose, win, or draw, we add
the appropriate score for the move that would follow those conditions,
along with the score that matches the value of the second column. Thankfully
part 1 gave us a solid foundation to find the answer to part 2!
*/
