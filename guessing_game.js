// let num1 = Math.floor(Math.random() * 20);

// let userNum = prompt("Guess the number (0-20)");

// console.log(num1);
// console.log(userNum);

// if (num1 == userNum) {
//     console.log("You've guessed correct number");
// } else {
//     console.log("You've guessed wrong number. Choose again.")
// }


let num1 = Math.floor(Math.random() * 21); // Generate a random number between 0 and 20

let userNum = parseInt(prompt("Guess the number (0-20)"), 10); // Convert the user's input to an integer

console.log(num1);
console.log(userNum);

if (num1 === userNum) {
    console.log("You've guessed the correct number!");
} else {
    // Calculate the difference between the guessed number and the correct number
    let difference = Math.abs(num1 - userNum);

    // Provide feedback based on how close or far the guess is
    if (difference === 1) {
        console.log("You're very close! Try again.");
    } else if (difference <= 3) {
        console.log("You're close! Keep trying.");
    } else if (difference <= 4) {
        console.log("You're close");
    } else {
        console.log("You're far off. Choose again.");
    }
}