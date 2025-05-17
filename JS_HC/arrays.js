/*
Array are used to store multiple elements in a single variables and they're mostly denoted by '[]'
*/
// traditional methods to declare array
// let arr1 = [1,2,3,4];
// console.log(arr1);

// another way to declare array
let arr2 = new Array(1,2,3,4,5);
// console.log(arr2);

// arr2.push(6);
// console.log(arr2);

// arr2.pop();
// console.log(arr2);

// let joinArr = arr2.join("-");
// console.log(joinArr);

// console.log(arr2.includes(6));
// console.log(arr2.includes(3));

// console.log(arr2.indexOf(4));
// console.log(arr2.indexOf(6));

// Interview Questions - Difference between slice() and splice()

let arr = new Array(1,2,3,4,5,6);

// console.log("OG Araay:", arr);

let newArr = arr.slice(1,3);
// console.log("Sliced Array", newArr);
// console.log("OG Araay:",arr);

let newArr2 = arr.splice(1,3);
// console.log("Spliced Array",newArr2);
// console.log("OG Araay:",arr);

/*
Difference 1
slice(idx1, idx2) where idx2 is non-inclusive
splice(idx1,idx2) where idx2 is inclusive

Difference 2
slice() doesn't manipulate original array but splice does it removes the spliced part from original array
*/

// ---------------Array 2---------------------------

let marvelHeros = new Array("Thor", "Ironman", "Spiderman");
let dcHeros = new Array("Superman", "Batman", "Flash");

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(dcHeros);

// concat() returns a new array it does not modify existing array

// console.log(marvelHeros.concat(dcHeros));
// console.log(marvelHeros);
// console.log(dcHeros);

// instead of concat() we can use spread operator '...' to combine elements of an array
// let spreadOp = [...marvelHeros, ...dcHeros];
// console.log(spreadOp);

// It does not work with string
let str2 = "Pawar";
let str1 = "Anuja";
// let str3 = [...str1, ...str2]
// console.log(str3);

// to represent two variables where primitive values are stored in an Array we can use Array.of(var1, var2,...,varN);
// Solution to the above is
// console.log(Array.of(str1, str2))

let anotherArray = [1, 2, 3, 4, [5, 6, 7] , 7, [6, 7, [8, 9]]];
// console.log(anotherArray)

// flat() will display as it is. flat(Infinity) will flattend all array elems
let modifiedAnotherArray = anotherArray.flat(Infinity);

// // flat(1) will flattend array at depth level of 1
let modifiedAnotherArray2 = anotherArray.flat(1);

// // flat(2) will flattend array at depth level of 2
let modifiedAnotherArray3 = anotherArray.flat(2);

// console.log(modifiedAnotherArray);
// console.log(modifiedAnotherArray2);
// console.log(modifiedAnotherArray3);


// Array.isArray(para) checks if the para is array or not and it returns boolean value if the para is array then it will return true or else false
let arr1 = [1,2,3,4];
// console.log(Array.isArray(arr1)); // true

// console.log(Array.isArray("Anuja")); // false
// console.log(Array.isArray([1,2,3 ])); // false

// Array.from() converts string into array and it creates a array-like structure

console.log(Array.from("Anuja"));

// Might be asked in an interview to confuse you
console.log(Array.from({name: "anuja"}));