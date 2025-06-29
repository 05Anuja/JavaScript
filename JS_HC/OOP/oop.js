// // Object Literals
// const user = {
//     username: "Anuja",
//     password: "anuja@21",
//     email: "anuja123@gmail.com",
//     getUserDeatils: function () {
//         // console.log(`Username: ${this.username}`)
//         console.log(this); // user
//         return `Username: ${this.username}`
//     }
// }

// console.log(user.getUserDeatils()); 
// console.log(this); // {} empty object

function User (name, age) {
    this.name = name;
    this.age = age
    this.getUserDetails = function () {
        console.log(`Name: ${this.name} and Age: ${this.age}`)
    }
    return this;
}

const user1 = new User("Anuja", 21);
const user2 = new User("Aryan", 20);
console.log(user1.constructor);
console.log(user1 instanceof User)
console.log(typeof user1);