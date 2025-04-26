// remove the duplicate elements 

let arr = [1,3,2,4,5,6,2,1,3,4];
// console.log(arr);
let arr2 = [];
let j = 0;

for (let i of arr) {
    if (!arr2.includes(i)) {
        arr2[j] = i;
        j++;
    }
}
console.log(arr2);