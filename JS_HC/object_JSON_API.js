let course = {
    courseName: "MERN stack",
    fees: 60000,
    courseTrainer: "Anuja",
};

// console.log(course.courseTrainer);
/* this is correct way to access values in object but suppose we have to print the value repeatedly so "course.courseTrainer" this might be not easy to write repeatedly
So to improve this we can use
This is called object-destructuring
let {courseName, fees, courseTrainer} = course;
*/
// let {courseName, fees, courseTrainer} = course;
// console.log(courseName,fees,courseTrainer); //MERN stack 60000 Anuja

let {courseTrainer: instructor, fees: price, courseName: modules} = course;
// console.log(instructor, price, modules); // Anuja 60000 MERN stack

/*
JSON API

{
    "name": "Anuja".
    "age": "21",
    "email": "anuja@1312",
}
*/