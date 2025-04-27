// How to copy a reference type (array, object, etc)

// Spread operator(...) is used to copy a reference type

// for array
let a = [1,2,3,4,5];
let b = [...a];

b.pop();

console.log(b);
console.log(a);

// for object
// let obj1 = {
//   name: "Anuja",
//   age: 21,
// };
// let obj2 = {
//   ...obj1,
//   gender: "female",
// };

// console.log(obj1);
// console.log(obj2);


// for strings
// let str = "Anuja Pawar";
// let chars = [...str];

// console.log(str);
// console.log(chars);