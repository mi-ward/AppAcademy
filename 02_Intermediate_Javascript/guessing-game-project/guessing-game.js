const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let numAttempts;

function randomInRange(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too high");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low");
        return false;
    } else if (num === secretNumber) {
        console.log("Correct!")
        return true;
    }
}

function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        answer = Number(answer);

        numAttempts--;

        let correctGuess = checkGuess(answer);
        if (correctGuess) {
            rl.close();
        } else if (numAttempts === 0) {
            console.log("Out of guesses. You lose.")
            rl.close();
        } else {
            askGuess();
        }
    });
}

function askRange() {
    rl.question("Enter a max number: ", (max) => {
        rl.question("Enter a min number: ", (min) => {
            max = Number(max);
            min = Number(min);

            console.log(`I'm thinking of a number between ${min} and ${max}...`)

            secretNumber = randomInRange(min, max);
            askGuess();
        });
    });
}

function askLimit() {
    rl.question("How many attempts do you need? ", (attempts) => {
        numAttempts = attempts;
        askRange();
    })
}

askLimit();
