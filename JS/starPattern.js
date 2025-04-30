// for (let i=0; i<5;i++) {
//     for (let j=0;j<5;j++) {
//         document.writeln("*");
//     }
//     document.writeln("<br/>");
// }

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i == 0 || i == 4 || j == 0 || j == 4) {
      document.writeln("*");
    } else {
        document.writeln("&nbsp;&nbsp;")
    }
  }
  document.writeln("<br/>");
}

// for (let i = 1; i <= 8; i++) {
//   for (let j = 1; j <= 8; j++) {
//     if (i == 1 || i == 8 || j == 1 || j == 8) {
//       document.writeln("*");
//     } else {
//       document.writeln("&nbsp;&nbsp;");
//     }
//   }
//   document.writeln("<br/>");
// }
