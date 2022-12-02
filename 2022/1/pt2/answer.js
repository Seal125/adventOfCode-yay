const fs = require('fs');

const input = fs.readFileSync('../input.txt').toString();
const lines = input.split(/\r?\n/);

function getTopThreeCalNum(lines) {
  const elfCalorieTracker = [0];

  let elfCount = 0;
  let sum = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      elfCount += 1;
      elfCalorieTracker[elfCount] = 0;
    }

    elfCalorieTracker[elfCount] += Number(lines[i]);
  }

  elfCalorieTracker
    .sort((a, b) => b - a)
    .splice(3, elfCalorieTracker.length - 3);

  elfCalorieTracker.forEach((cal) => {
    sum += cal;
  });

  return sum;
}

console.log(`Top three calorie numbers combined: ${getTopThreeCalNum(lines)}`);

/*
This is a somewhat different version of answer 1; making an object
seemed unnecessary if all we really care about is the calories. Using an
array to sort the calories would be another idea, as shown here. We only
need the top three calories, so I started splicing to remove the rest
and kept the ones from the first 3 indices in the array. I haven't used
a forEach in a while, so it was a good way to review it while adding all
the calories together for one total sum.
*/