let arr = [1,2,3,4,5,6,7,8,9,10];
let evenArr = [], oddArr = [];
let evenIdx = 0, oddIdx = 0;

for (let i=0; i<=arr.length-1; i++) {
    if (arr[i]%2==0) {
        evenArr[evenIdx] = arr[i];
        evenIdx++;
    } else {
        oddArr[oddIdx] = arr[i];
        oddIdx++;
    }
}

console.log(evenArr);
console.log(oddArr);

// const evenOdd = () => {
//   let arr = [2, 5, 7, 3, 8, 9, 0];
//   let even = [],
//     evenIdx = 0;
//   let odd = [],
//     oddIdx = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] % 2 == 0) {
//       even[evenIdx] = arr[i];
//       evenIdx++;
//     } else {
//       odd[oddIdx] = arr[i];
//       oddIdx++;
//     }
//   }
//   console.log(even);
//   console.log(odd);
// };
// evenOdd();
