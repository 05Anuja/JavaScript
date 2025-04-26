// Count the occurrence of the letter
let str = "the quick brown box for the lazy dog";
let letterCount = {};

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (ch !== " ") {
    if (letterCount[ch]) {
      letterCount[ch] += 1;
    } else {
      letterCount[ch] = 1;
    }
  }
}

console.log(letterCount);

// Print letter counts in the order they appear in the string
// for (let letter in letterCount) {
//   console.log(`${letter} : ${letterCount[letter]}`);
// }

// Print in alphabetical order
// for (let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++) {
//   let letter = String.fromCharCode(ch);
//   if (letterCount[letter]) {
//     console.log(`${letter}: ${letterCount[letter]}`);
//   }
// }
