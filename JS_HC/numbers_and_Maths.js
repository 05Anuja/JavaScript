let num1 = 23.8956;

// console.log(num1.toPrecision(4));
// console.log(num1.toPrecision(5));

let num2 = 10000000000;
// toLocaleString() adds ',' in-between the numbers
// console.log(num2.toLocaleString()); //according to US numbering system
// console.log(num2.toLocaleString('en-In')); //according to the Indian Numbering System

// +++++++++++Math Functions+++++++++++++++++++++++

// console.log(Math.PI) //3.14159265.....
// toFixed(number) is used to display numbers after decimal
// console.log(Math.PI.toFixed(2)); //3.14

// abs() is used to convert any number into positive
// console.log(Math.abs(-10));

// round()- rounds the number to the nearest value if the value after decimal is equal or greater than 5 then it will print the next number (Ex. 4.5 = 5 and 4.2 = 4)
// console.log(Math.round(4.2));
// console.log(Math.round(4.5));

// ceil() - rounds the number to the next number. If the value after decimal is greater than 0 then it will print the next number (Ex.   4.1 = 5)
// console.log(Math.ceil(4.1));

// floor() - rounds the number to the number itself. Even if the value after decimal is greater than 0 then it will print the number itself. (Ex. 4.1 = 4)
// console.log(Math.floor(4.1));

// console.log(Math.sqrt(64));
// console.log(Math.pow(2, 5));
// console.log(Math.max(10, 20, 60, 96, 56));

// random() will always return random value between 0-1
// console.log(Math.random());

// random()*10 generates number between 0-9
// console.log(Math.random() * 10);

// random()*10+1 generates number between 1-10
// console.log(Math.floor((Math.random() * 10) + 1));

// let num3 = 20;
// let num4 = 400;
// console.log(Math.floor(Math.random() * (num4 - num3 + 1)) + num4);

// 4-digits OTP
let otp4 = Math.floor(Math.random() * 9000 + 1000);
console.log(otp4);

// 6-digits OTP
let otp6 = Math.floor(Math.random() * 900000 + 100000);
console.log(otp6);
