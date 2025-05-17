let date = new Date();

// console.log(`Type of Date: ${typeof date}`);

// console.log(`Date: ${date.toLocaleDateString()}`);
// console.log(`Time: ${date.toLocaleTimeString()}`);
// console.log(`Year: ${date.getFullYear()}`);

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleString());

let myCreatedDate = new Date(2004, 11, 13);
// console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2004, 11, 13,14,30);
// console.log(myCreatedDate2.toLocaleString());

// MM/DD/YY
let dmy = new Date("12-13-2004");
// console.log(dmy.toLocaleString());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

let modifiedDate = newDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit",
    hour: "numeric",
    minute: "numeric"
});

console.log(modifiedDate);