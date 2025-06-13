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

// for (let n = 2; n <= 10; n++) {
//   let isPrime = true;
//   for (let i = 2; i <= n/2; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) console.log(n);
// }

// console.log(2);
// for (let n = 3; n<=30; n++) {
//   let isPrime = true;
//   for (let i = 3; i< n;i++) {
//     if(n%i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) console.log(n);
// }

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// for (let n = 2; n <= 10; n++) {
//   if (isPrime(n)) console.log(n);
// }

// const primeNum = () => {
//   let n = 20;
//   if (n < 2) {
//     console.log("Please provide valid Range");
//   }
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// };
// primeNum();

const primeNum = () => {
  let n = 20;
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
};

primeNum();

