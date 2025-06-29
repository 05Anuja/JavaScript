// const isTriangle = (a, b, c) => {
//   if (a + b > c && b + c > a && a + c > b) {
//     console.log(`Triangle can be formed with sides ${a}, ${b}, and ${c}`);
//   } else {
//     console.log(`Cannot form a triangle with sides ${a}, ${b}, and ${c}`);
//   }
// };

// isTriangle(3, 4, 5);
// isTriangle(1, 2, 3);

for (let i = 1; i <= 50; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log("FizzBuzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
}
