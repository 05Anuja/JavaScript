// Jab hum literals ki tarah declare krtey hai to wo signleton nahi banta aur jab hum objects constructor ki banega to wo singleton banta hai.


//The below example is of Object literals

let newSymbol = Symbol("key1");

let user1 = {
    name: "Anuja",
    age: 21,
    [newSymbol]: "A", //this is a way to access a Symbol value in object
    "full name": "Anuja Pawar",
    location: "Mumbai",
    email: "anuja@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
};

// console.log(user1);

// two ways to access keys of the object
// console.log(user1.email);
// console.log(user1["email"]);
// console.log(user1["full name"]);
// console.log(user1[newSymbol]);

/* how to change the value in objects
syntax: objName[key] = "newValue";
*/

// user1["full name"] = "Anuja Bhimraj Pawar";
// console.log(user1["full name"]);


// to freeze the object so that no one can change the values in the objects

// Object.freeze(user1);

// user1.email = "anuja@gmail.com";
// console.log(user1.email); // output - anuja@google.com
// It dosen't updates the value because we have freezed the object

// to add new key: value pair in the object 
user1.greeting = function () {
    console.log("Hello");
};

user1.greeting2 = function () {
    console.log(`Hello ${this.name}!`);
};

// console.log(user1.greeting);
// console.log(user1.greeting());

// console.log(user1.greeting2());


// The below example is of singleton Object

let person = new Object({
    name: "Anuja",
    age: 21,
});

// console.log(person);
// console.log(user1.lastLoginDays);



let regularUser = {
    email: "anuja1213@google.com",
    fullname: {
        userFullname: {
            firstName: "Anuja",
            lastName: "Pawar",
        }
    },
    password: "anuja@1312",
};

// Ways to access object > object > object

// console.log(regularUser["fullname"].userFullname["firstName"]);
// console.log(regularUser.fullname.userFullname.lastName);


// How to merge two objects
let obj1 = {
    1: "A",
    2: "B",
};

let obj2 = {
    3: "C",
    4: "D",
}

// let obj3 = {obj1, obj2};
// console.log(obj3);
// output - { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

// by doing this 'Object.assign(obj1, obj2)' all values are store in obj1 to avoid this we use '{}'
let obj4 = Object.assign({}, obj1, obj2);
// console.log(obj1); //{ '1': 'A', '2': 'B' }
// console.log(obj4); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
let obj3 = Object.assign(obj1, obj2);
// console.log(obj1); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
// console.log(obj3); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

let obj5 = {...obj1, ...obj2};
// console.log(obj5);
// output - { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }


// When we have array of objects 
let userObj = [
    {
        id: 1,
        email: "anuja@1312",
    },
    {
        id: 2,
        email: "aryan@0504",
    },
];

// console.log(userObj[0].id, userObj[0].email);
// console.log(userObj[1].id, userObj[1].email);

// how to access keys of object
let personObj = {
    id: 1,
    name: "Anuja",
    age: 21,
}

console.log(Object.keys(personObj)); // this will return an array of keys in object

console.log(Object.values(personObj)); // this will return an array of values in object

console.log(Object.entries(personObj));
//Output- [ [ 'id', 1 ], [ 'name', 'Anuja' ], [ 'age', 21 ] ]

console.log(personObj.hasOwnProperty('password')); // returns true/false