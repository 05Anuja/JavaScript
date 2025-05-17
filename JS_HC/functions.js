// function addTwoNums(num1, num2) {
//     console.log(num1 + num2);
// };

// addTwoNums(3,5); //output - 8

// let result = addTwoNums(3,5);
// console.log(`Result: ${result}`);
/*
output - 8  (This 8 is becuase of console.log())
Result: undefined (This undefined is because function is not returning anything)
*/

// Same funtion with return statement

/*
function addTwoNums(num1, num2) {
    // let res = num1 + num2;
    // return res;
    return num1 + num2;
};

let result = addTwoNums(3,5);
console.log(`Result: ${result}`);
// Output - Result: 8
*/

function sum(num1, num2) {
  return num1 + num2;
}

// sum(1,3); // this won't return anything
// console.log(sum(1,3));

function loggedInMsg(userName) {
  if (userName === undefined || userName === "") {
    return `Enter the username`;
  }
  return `${userName} just logged in!`;
}

// console.log(loggedInMsg("Anuja")); //Anuja just logged in!
// console.log(loggedInMsg("")); // just logged in!
// console.log(loggedInMsg()); //undefined just logged in!

function successfulMsg(username = "Anuja") {
  if (username === undefined || username === "") return `Enter the username`;
  else return `${username} just logged in!`;
}

// console.log(successfulMsg()); //Anuja just logged in!
// console.log(successfulMsg("Aryan"));// Aryan just logged in!

// REST operator '...'

function calculateCartPrice(num1, num2, ...numN) {
  return num1, num2, numN;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600, 700));
//This will return an array Output- [200, 300, 400]

function sayMyName(...name) {
  return name;
}
// console.log(sayMyName("Anuja", "Aryan", "Vinish"));
// Output - [ 'Anuja', 'Aryan', 'Vinish' ]

// funcions with Object
let user = {
  username: "Anuja",
  age: 21,
};

function handleObject(anyObject) {
  return `My name is ${anyObject.username} and my age is ${anyObject.age}`;
}

// console.log(handleObject(user));
// Output - My name is Anuja and my age is 21

// console.log(
//   handleObject({
//     username: "Aryan",
//     age: 21,
//   })
// );
// Output - My name is Aryan and my age is 21

// Functions with Array
let newArray = [100, 200, 300, 400];

function handleArray(anyArray) {
    return anyArray[1];
};

// console.log(handleArray(newArray));
console.log(handleArray([1,2,3]))