// This allows us to use the file system to read and manipulate files
const fs = require('fs');

// Get input from input.txt file and turn into string
const input = fs.readFileSync('../input.txt').toString();

// Separate the input by lines, place all values in array
const lines = input.split(/\r?\n/);

function getLargestCalNum(lines) {
  const elfCalorieTracker = {
    elf1: 0,
  };

  let elfCount = 1;
  let largestCal = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      elfCount += 1;
      elfCalorieTracker[`elf${elfCount}`] = 0;

      if (elfCalorieTracker[`elf${elfCount - 1}`] > largestCal) {
        largestCal = elfCalorieTracker[`elf${elfCount - 1}`];
      }
    }

    elfCalorieTracker[`elf${elfCount}`] += Number(lines[i]);
  }

  return largestCal;
}

console.log(`Largest calorie number: ${getLargestCalNum(lines)}`)

/*
My thinking behind this answer is that it's a lot easier to keep track
of the highest calorie number if I just make a variable for it. Every time
a new elf is introduced (which means the previous elf has finished calculating
their total calories), I check the previous elf's calorie amount; if it's
higher than the current largest calorie number I have, I replace it.

Basically, as I count every elf's calories, I also track the current top
number until another elf's calories replaces it. This keeps going until
all calories have been counted.
*/