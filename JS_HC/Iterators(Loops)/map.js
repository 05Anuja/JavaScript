// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums.map((num) => (num + 10));
// console.log(newNums);

// nums.forEach((num) => (
//     console.log(num + 10)
// ))

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// chaining
const newNums = nums
    .map((num) => num * 10) //values 10,20,...,100
    .map((num) => num + 1) //values 11,21,...,101
    .filter((num) => num > 30 && num < 50);// values between 30-50
console.log(newNums);