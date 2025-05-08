let year = Number(prompt("Enter the Year"));

// if ((year %4===0 && year %100 !==0) || year %400 ===0) {
//     document.writeln(`${year} is a Leap Year`);
// } else {
//     document.writeln(`${year} is not a Leap Year`);
// }

if (year % 4 === 0 && year % 100 !== 0) {
  document.writeln(`${year} is a Leap Year`);
} else if (year % 400 === 0) {
  document.writeln(`${year} is a Leap Year`);
} else {
  document.writeln(`${year} is not a Leap Year`);
}
