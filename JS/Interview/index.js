// 1 question
function check () {
    return 100;
}
var check;
console.log(check);

// 2 question
/* Q. How can we handle asynchronous operations
    --> Promises, async/await, callback functions
*/

// 3 question
/* Q. Difference between let and const
    --> 1) Firstly both are block scoped 
        2) The main difference is that in let we cannot redeclared but we can reassign values to it and in const both redeclaration and reassignment is not allowed.
        3) let is used the values are changeable and const is used when values remain constant.
        4) let can be declared without initialization and const must be initialized at the time of declaration
        5) var adds itself in the window object and let & const doesn't add themselves.
*/

//  question
// console.log(
// [1, 2, 3, 4].map((e) => {
//     if (e > 0) return;
//     return e * 10;
//   })
// );

/*
Its output is [undefined, undefined, undefined, undefined]
because if (e > 0) return;
this statement specifies that if e>0 then return undefined 
*/