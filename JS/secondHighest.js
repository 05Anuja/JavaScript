let arr = [1, 2, 3, 4, 5, 50];

let max = arr[1];
let secondMax;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] < max) {
    secondMax = arr[i];
  }
}

console.log(secondMax); // Output: [4]
