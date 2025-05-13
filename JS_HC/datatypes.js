// "use strict"; // treat all JS code as newer version/JS
let name = "Anuja"; // string
let age = 21; // number (range - 2 to 2^53)
let isLoggedIn = false; //boolean

/*
There are two types of datatypes in JS - Primitive and Non-Primitive
1) Primitive Datatypes = number (1,2,3), string ("hello", "anuja"), boolean (true, false), null (standalone value), undefined (declared but not assigned), symbol (creates a unique value), BigInt (big number)

2) Non-Primitive Datatypes or Reference Datatypes = Objects, Array, Function
*/

// JS is dynamically typed language

// Symbol creates a unique return value
// let id = Symbol('123');
// let id2 = Symbol('123');

// console.log(id === id2);

// Reference type

// Array
let arr = [1, 2, 3, "Anuja", 4];

// Objects
let objects = {
    name: "Anuja",
    age: 21,
    profession: "Web Developer",
}
console.log(arr);
console.log(objects);

// function
function sayHello() {
    console.log('Hello from function');
}
sayHello();
