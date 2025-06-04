// const userEmail = "anuja@abc.com"; //true
// const userEmail = ""; //false
// const userEmail = []; //true
// const userEmail = {}; //true
// const userEmail = BigInt(0n); //false
const userEmail = function(){}; //true

if (userEmail) {
    console.log("Email Found!");
} else {
    console.log("Email doesn't match!")
}

/* Falsy Values
    false, 0, -0, BigInt(0n), "", null, undefined, NaN
*/

/* Truthy Values
    All values except false, 0, -0, 0n, "", null, undefined, and NaN are considered truthy
    also "0", "false", " ", {}, [], function(){}
*/

/*
false == 0 //true
false == '' //true
0 == ''//true
console.log(0 == '')
*/

// Nullish coalescing Operator (??)  
/*
The Nullish Coalescing Operator (??) in JavaScript returns the right-hand value only if the left-hand value is null or undefined. It’s used to set default values without mistakenly treating 0, false, or "" as missing
Ex. - 
    let username = null;
    let defaultName = "Guest";

    let nameToDisplay = username ?? defaultName;
    console.log(nameToDisplay); // Output: "Guest"
*/

// let val;
// val = null ?? 10 ?? 15;
// console.log(val); // 10


// Ternary Operator
// condition ? true : false

let num = 4;

num === 2 ? console.log("Match") : console.log("Doesn't match");