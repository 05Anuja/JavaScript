// let num = 5;
// let res = 1;
// for (let i=1; i<=num; i++) {
//     res *= i;
//     // n--;
//     console.log(res);
// }


// Factorial using while loop
// let num = 20;
// let res = 1;
// while (num > 1) {
//     res *= num;
//     num --;
//     console.log(res);
// }

function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1); //120
}
console.log(fact(5)); 


// let userNum = prompt("Enter the number to find the factorial");
// let res = 1;
// for (let num = 5; num > 1; num --) {
//     res = res * num;
// }
// console.log(res);