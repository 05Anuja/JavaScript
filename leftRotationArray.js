let arr = [1,2,3,4,5,6,7,8];
let k = 4;
let leftRotation = [];

for (let i = 0; i < arr.length; i++) {
    leftRotation[i] = arr[(i+k)%arr.length]
}
console.log(leftRotation);