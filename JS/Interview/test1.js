// 1) Reverse the Array Elements without using any inbuilt function/methods
// Solution -
// let arr1 = [1, 2, 3, 4, 5];
// let reversedArray = [];
// let j = 0;
// for (let i = arr1.length-1; i >= 0; i--) {
//     reversedArray[j] = arr1[i];
//     j++;
// }
// console.log(reversedArray);

// 2)find the minimum and maximum number from the array
// Solution -
// let arr2 = [200, 1, 2, 30, 4, 5, 100, 0, 300];
// let min = arr2[0], // min = 200
//   max = arr2[0]; // max = 200
// for (let j = 1; j < arr2.length; j++) {
//   if (min > arr2[j]) {
//     min = arr2[j];
//   } else if (max < arr2[j]) {
//     max = arr2[j];
//   }
// }
// console.log(`Minimum = ${min} and Maximum = ${max}`);

// 3)Find the second highest element from an array
// solution -
// let arr3 = [1, 2, 30, 45, 70, 50, 68];
// let highestNum = -Infinity;
// let secondHighest = -Infinity;
// for (let k = 0; k < arr3.length; k++) {
//   if (arr3[k] > highestNum) {
//     secondHighest = highestNum;
//     highestNum = arr3[k];
//   } else if (arr3[k] > secondHighest && arr3[k] < highestNum) {
//     secondHighest = arr3[k];
//   }
// }
// console.log(secondHighest);

// 4) Find the largest word from the string
// solution-
// let str = "JavaScript is a Programming Language";
// let strSplit = str.split(" ");
// let highestWord = strSplit[0];
// for (let i = 1; i < strSplit.length; i++) {
//   if (strSplit[i].length > highestWord.length) {
//     highestWord = strSplit[i];
//   }
// }
// console.log(highestWord);

// 5)Find how many time a letter occured in a str
let str = "JavaScript is a Programming Language";
let letterCount = {};

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    // console.log(ch);
    if (ch !== " ") {
        if (letterCount[ch]) {
            letterCount[ch] += 1;
        } else {
            letterCount[ch] = 1;
        }
    }
}
console.log(letterCount);