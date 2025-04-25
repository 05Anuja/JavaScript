// Print right angled triangle with "A,B,C,....,O"

// let num = 64;
// console.log(num+=1);
// for (let i=0 ;i<=5;i++) {
//     for (let j=1; j<=i; j++) {
//         document.writeln(String.fromCharCode(num+=1));
//     }
//     document.writeln("<br/>");
// }

// Find the first longest word from a sentence
let str = "Anuja Bhimraj Pawar";
let currentWord = str.split(" ");
tempWord = [0];

for (let i=0; i<currentWord.length;i++) {
    if (currentWord[i].length > tempWord.length) {
        tempWord = currentWord[i];
    }
    console.log(tempWord);
}