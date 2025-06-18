// const languages = ["HTML", "CSS", "JS", "ReactJS"];

// languages.forEach((item, index, arr) => {
//     // if (val.length < 4) {
//         console.log(item, index, arr)
//     // }
// })

// function printMe(item) {
//     console.log(item);
// }

// // languages.forEach(printMe);

const languages = [
    {
        langName: "JavaScript",
        langFileName: "js",
    },
    {
        langName: "Python",
        langFileName: "py",
    },
    {
        langName: "Java",
        langFileName: "java",
    }
];

languages.forEach((item) => {
    console.log(item.langName)
})