// With arrays
// let arr = ["Anuja", "Aryan", "Poonam", "Bhimraj"];
// for (const i of arr) {
//     console.log(i);
// }

// with strings
let greetings = "Hello World!";
for (const greet of greetings) {
    if(greet === " ") {
        continue; //to continue if space is detected
        // break; //to come out of the loop if space is detected 
    }
    console.log(greet);
}

const map = new Map();
map.set("a", "Anuja");
map.set("b", "Aryan");
console.log(map);

for (const [key, val] of map) {
    // console.log(i)
    console.log(`${key} = ${val}`)
}
console.log(map.get('a'));


// let myObj = {
//     name: "Anuja",
//     age: 21,
// }

// for (const [key, val] of myObj) {
//     console.log(`${key}: ${val}`);
// }