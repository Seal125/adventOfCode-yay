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