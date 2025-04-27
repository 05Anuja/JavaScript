// // remove the duplicate elements

// let arr = [1,3,2,4,5,6,2,1,3,4];
// // console.log(arr);
// let arr2 = [];
// let j = 0;

// for (let i of arr) {
//     if (!arr2.includes(i)) {
//         arr2[j] = i;
//         j++;
//     }
// }
// console.log(arr2);

let arr = [1, 2, 3, 4, 1, 3, 4];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--;
    }
  }
}

console.log(arr);

// lexical Environment

// function outer() {
//     let a = 10;

//     function inner() {
//         let b = 20;
//         console.log(a + b);
//     }

//     inner();
// }

// outer();
