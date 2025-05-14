// // "use strict"; // treat all JS code as newer version/JS
// let name = "Anuja"; // string
// let age = 21; // number (range - 2 to 2^53)
// let isLoggedIn = false; //boolean

// /*
// There are two types of datatypes in JS - Primitive and Non-Primitive
// 1) Primitive Datatypes = number (1,2,3), string ("hello", "anuja"), boolean (true, false), null (standalone value), undefined (declared but not assigned), symbol (creates a unique value), BigInt (big number)

// 2) Non-Primitive Datatypes or Reference Datatypes = Objects, Array, Function
// */

// // JS is dynamically typed language

// // Symbol creates a unique return value
// // let id = Symbol('123');
// // let id2 = Symbol('123');

// // console.log(id === id2);

// // Reference type

// // Array
// let arr = [1, 2, 3, "Anuja", 4];

// // Objects
// let objects = {
//     name: "Anuja",
//     age: 21,
//     profession: "Web Developer",
// }
// console.log(arr);
// console.log(objects);

// // function
// function sayHello() {
//     console.log('Hello from function');
// }
// sayHello();

// --------------Memory Allocation-------------------------

/*
stack (primitive) and heap (non-primitive)
In Stack Memory, changes are not applied to the original values
In Heap Memory, changes are applied to the original values
*/

// Example for stack 

console.log(`Stack Memory Allocation`)
let name1 = "anuja";
let name2 = name1;
name2 = "Aryan";
console.log(`Name1 : ${name1}`);
console.log(`Name2 : ${name2}`);

// Example for Heap 

console.log(`Heap Memory Allocation`);
let user1 = {
    name: "Anuja",
    email: "anuja12@google.com",
    age: 21,
};

let user2 = user1;

user2.email = "anuja@google.com";
console.log(`User1 Email: ${user1.email}`);
console.log(`User2 Email: ${user2.email}`);
