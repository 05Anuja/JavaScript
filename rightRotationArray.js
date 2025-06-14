let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 4;
let rightRotation = [];

for (let i = 0; i < arr.length; i++) {
  rightRotation[i] = arr[(i - k + arr.length) % arr.length];
}

console.log(rightRotation);
