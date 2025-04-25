let arr = [1,2,3,4,5,5,6,3];
let count = 0;
for (let i=0; i<arr.length; i++) {
    count++;
}
console.log(`There are total ${count} elements in an array.`);

for (let j= arr.length-1; j>=0; j--) {
    console.log(`${arr[j]}`);
}