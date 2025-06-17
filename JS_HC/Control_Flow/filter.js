// forEach() does not return any value
/*
const coding = ["JS", "HTML", "CPP"];
const values = coding.forEach((item) => {
    return item
})
console.log(values); //output - undefined
*/

// filter()
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const val = nums.filter((num) => (num > 5));

const val = nums.filter((num) => {
    return num > 5; 
})

// NOTE: return keyword is important if we use {}
// console.log(val);

const newNums = [];
nums.forEach((num) => {
    if (num > 5) {
        newNums.push(num);
    }
})
// console.log(newNums);


const books = [
    {
        title: "Book1",
        publish: 1981,
        genre: "Fiction",
        edition: 2004,
    },
    {
        title: "Book2",
        publish: 1988,
        genre: "History",
        edition: 2008,
    },
    {
        title: "Book3",
        publish: 1991,
        genre: "Non-Fiction",
        edition: 2009,
    },
    {
        title: "Book4",
        publish: 1980,
        genre: "History",
        edition: 2004,
    },
    {
        title: "Book5",
        publish: 1998,
        genre: "Comic",
        edition: 2010,
    },
];

// console.log(books);
const userBooks = books.filter((book) => (
    book.edition >= 2005 && book.genre === "History"
));

console.log(userBooks)