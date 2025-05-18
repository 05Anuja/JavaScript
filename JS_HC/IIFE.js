// Immediately Invoked  Function Expression (IIFE) '(definition)(calling)'

// (function sayHello() {
//     console.log("Hello");
// })();
// OUTPUT - Hello

// console.log((function addNums(n1, n2) {
//     return n1 + n2;
// })(4,5)
// );
// OUTPUT - 9

function sayName1 () {
    let name = "Aryan";
    function sayMyName1() {
        let name1 = "Anuja";
        console.log(`${name} ${name1}`);
    }
    console.log(`${name}`);
    // console.log(`${name1}`); // It is not useable because name1 is of sayMyName1 context
    sayMyName1();
};
// sayName1();


// This is IIFE
// (function sayName() {
//     let name = "Aryan";
//     (function sayMyName() {
//         let name1 = "Vinish";
//         console.log(`${name1}`)
//         // console.log(${name}); // name is not useable cuz we are using IIFE
//     })();
//     console.log(`${name}`)
// })();
// OUTPUT - Aryan

/*
NOTE: 
IIFE is used to immediately invoked the function and also to avoid global pollution
semicolon ';' is most important after IIFE
*/

// (addNums = (n1, n2) => {
//     console.log(`${n1 + n2}`);
// } )(1,2);
// OUTPUT - 3

/*
OR we can use return but we have wrapped IIFE in console.log()
For Example - 
console.log(
    (subNums = (n1, n2) => {
        return n1-n2;
    })(3,2)
);
*/

// Named IIFE and Normal IIFE

// Named IIFE
(function sayHello() {
    console.log("Hello");
})();

// Normal IIFE
((name) => {
    console.log(`${name} hiii!!`);
})("Anuja");