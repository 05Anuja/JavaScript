let arr = [1, 2, 4, 5, 6];
let n = arr.length + 1;
const sumOfFirstN = (n * (n + 1)) / 2;
let sumOfArray = 0;

for (let i = 0; i< n-1; i++) {
    sumOfArray = sumOfArray + arr[i];
}

console.log(sumOfArray)
console.log(sumOfFirstN)

let missingNumber = sumOfFirstN - sumOfArray;
console.log(missingNumber)