// let year = Number(prompt("Enter the Year"));

// if ((year %4===0 && year %100 !==0) || year %400 ===0) {
//     document.writeln(`${year} is a Leap Year`);
// } else {
//     document.writeln(`${year} is not a Leap Year`);
// }

// if (year % 4 === 0 && year % 100 !== 0) {
//   document.writeln(`${year} is a Leap Year`);
// } else if (year % 400 === 0) {
//   document.writeln(`${year} is a Leap Year`);
// } else {
//   document.writeln(`${year} is not a Leap Year`);
// }

function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    // document.writeln(`${year} is a Leap Year`);
    return true;
  } else if (year % 400 === 0) {
    // document.writeln(`${year} is a Leap Year`);
    return true;
  } else {
    // document.writeln(`${year} is not a Leap Year`);
    return false;
  }
}

let year = Number(prompt("Enter the year"));
if (leapYear(year) === true) {
  document.writeln(`${year} is a Leap Year`);
} else {
  document.writeln(`${year} is not a Leap Year`);
}