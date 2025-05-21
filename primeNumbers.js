// function isPrime(n) {
//     if(n<2) {
//         return `${n} is not a Prime Numnbers`;
//     }

//     for (let i = 2; i < n; i++) {
//         if(n%i===0) {
//             return `${n} is not a Prime Number`;
//         }
//     }

//     return `${n} is a Prime Number`;
// };

// console.log(isPrime(14));

for (let n = 2; n <= 10; n++) {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if(isPrime) console.log(n);
}
