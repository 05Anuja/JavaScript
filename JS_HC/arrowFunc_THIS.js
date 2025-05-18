// 'this' keyword in JS


// let a1 = 20;
// let a2 = 30;

let user = {
    username: "Anuja",
    age: 21,
    welcomeMsg: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
    // welcomeMsg();
}

// // user.welcomeMsg();
// // user.username = "Aryan";
// // user.welcomeMsg();

// console.log(this);


function one() {
        let user = "Anuja";
    console.log(this.user); // this won't work because 'this' keyword doesn't work in function
        // console.log(user);
};

// one();
// OUTPUT- undefined

const one1 = function () {
        let user = "A";
        console.log(this);
};

// one1();


// Arrow functions

const two = () => {
    // console.log("Hii");
    console.log(this);
};

// two();

// Explicit return is when we used 'return' keyword
const addNums = (num1, num2) => {
    return num1 + num2;
};
console.log(addNums(3,4)); // 7

// Implicit return means when we don't use 'return' keyword
// const subNums = (num1, num2) => num1 - num2;
// The above same can be written as follows
const subNums = (num1, num2) => (num1 - num2);
console.log(subNums(3,2)); // 1

/*
NOTE:
When we use '{}' we need to write return keyword
When we use '()' we don't need to write return keyword
*/

// to return a object while using parenthesis
const returnObj = () => ({user: "Anuja"});
console.log(returnObj()); //OUTPUT - { user: 'Anuja' }