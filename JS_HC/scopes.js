// var c = 30;
// let a = 300;
// if (true) {
//   let a = 20;
//   const b = 30;
//   var c = 300;
//   console.log(`Block Scoped a: ${a} b: ${b} c:${c}`);
// }

// console.log(`Global Scoped a:${a} c:${c}`);

function outerFunc() {
    let user = "Anuja";
    console.log("Outer Function Calling...");

    function innerFunc() {
        let age = 21;
        console.log("Inner Function Calling...", user, age);
    }
    // console.log(age); //age cannot be accessed outside of its scope
    innerFunc();
    console.log("Outer Function User", user);
};

// outerFunc();
/*  OUTPUT-
Outer Function Calling...
Inner Function Calling... Anuja 21
Outer Function User Anuja
*/



if (true) {
    const username = "Anuja";
    if (username === "Anuja") {
        const website = "YouTube";
        // console.log(`${username} and ${website}`);
        /* OUTPUT - 
        Anuja and YouTube
        */
    }
    // console.log(website); //website cannot accessed outside its scope
}

// console.log(username); // username cannot accessed outside its scope


// ++++++++++++++++Interesting Question++++++++++++++
// It works correctly
console.log(addOne(5));
function addOne(num1) {
    return num1 + 1;
}

// addOne(5);

// but in this we cannot access the addTwo before initialization because here addTwo holds a function basically it variable where function is stored
// addTwo(3);
const addTwo = function (num1) {
    return num1 + 2;
}
console.log(addTwo(3));

