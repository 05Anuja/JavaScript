// 1) Write a for loop that prints all even numbers between 1 and 20 without using if inside the loop.

// for (let i=2; i<=20; i+=2) {
//     console.log(i);
// }

// 2) Using a while loop, reverse an array [1,2,3,4,5] manually (without using .reverse()).

// let arr = [10, 20, 30, 40];
// let reversedArr = [];
// let i = arr.length-1;
// while (i>=0) {
//     reversedArr.push(arr[i]);
//     i--;
// }

// console.log(reversedArr);

// 3) Nested loop: Use a for loop inside another for loop to print the following pattern:
// *
// **
// ***
// ****

// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j < i; j++) {
//     document.writeln("*");
//   }
//   document.writeln("<br />");
// }

// 4) Ternary operator: Rewrite an if-else that checks if a number is even or odd using a ternary operator.

// let num = 4;
// let res = (num%2==0) ? "Even" : "Odd";
// console.log(res);

// 5) Count letters: Write a function that counts how many times the letter 'a' appears in a string.

// function countA(str) {
//     let count = 0;
//     for (let char of str) {
//         if ( char === "a" && char === "A") {
//             count++;
//         }
//     }
//     return count;
// }

// countA("anuja pawar");

// 6) Print all elements at even indexes of an array using a for loop.

// let array = [10,20,30,40,50];
// for (let i=0; i<array.length; i+=2) {
//     console.log(array[i]);
// }

// 7) Nested if statement:
// Check if a number is positive and even. If not positive, print "Negative or Zero".

// let num = -6;
// if (num > 0) {
//     if (num%2==0) {
//         console.log("Number is Positive and Even");
//     } else {
//         console.log("Number is Positive and Odd");
//     }
// } else if (num < 0) {
//     console.log("Number is Negative");
// } else if (num === 0) {
//     console.log("Number is Zero");
// } else {
//     console.log("Invalid Input");
// }

// 8) Destructuring + Array methods:
// Given ["HTML", "CSS", "JS", "React"], extract the first two elements into variables and print them.

// let topics = ["HTML", "CSS", "JS", "React"];
// let [first, second] = topics;
// console.log(first, second);

// 9) Check if a string starts with a given word using .startsWith().
// let str = "JavaScript is a programming language";
// console.log(str.startsWith("JavaScript")); // true
// console.log(str.startsWith("programming")); //false

// 10) Replace all spaces in a string with dashes (-) using .replaceAll().
let str = "JavaScript is a programming language";
// console.log(str.replaceAll(" ", "-")); //JavaScript-is-a-programming-language
let dashedStr = str.replaceAll(" ", "-");
console.log(str);
console.log(dashedStr);