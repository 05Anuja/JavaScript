// Right angled triangle star pattern printing
for (let i=1; i<=5; i++) { //for rows
    for (let j=1; j<=i; j++) {  //for star
        document.writeln("*");
    }
    document.writeln("<br/>");
}

document.writeln("<hr />");

// Inverse Right angled triangle star pattern printing
for (let i=1; i<=5; i++) {
    for (let j=5; j>=i; j--) {
        document.writeln("*");
    }
    document.writeln("<br/>");
}

document.writeln("<hr />");

// 1
// 22
// 333
// 4444
// 55555
for (let i=1; i<=5; i++) {
    for (let j=1; j<=i; j++) {
        document.writeln(i);
    }
    document.writeln("<br/>");
}

document.writeln("<hr />");


// $
// //
// @@@
// %%%%
// #####
for (let i=1; i<=5; i++) {
    for (let j=1; j<=i; j++) {
        if (i==1) {
            document.writeln("$");
        } else if (i==2) {
            document.writeln("/");
        } else if (i==3) {
            document.writeln("@");
        } else if (i==4) {
            document.writeln("%");
        } else {
            document.writeln("#");
        }
    }
    document.writeln("<br/>");
}

document.writeln("<hr />");

// 1 2 3 4 5
// 6 7 8 9
// 10 11 12
// 13 14
// 15
let a = 0;
for (i=1; i<=5; i++) {
    for (j=5; j>=i; j--) {
        document.writeln(a = a + 1);
    }
    document.writeln("<br/>");
}

document.writeln("<hr />");

// * * * * *
//   * * * *
//     * * *
//       * *
//         *
for (i=5; i>=1; i--) { //for rows
    for (let k=1; k<=5-i; k++) { //for space
        document.writeln("&nbsp;");
    }
    for (j=1; j<=i; j++) { //for *
        document.writeln("*");
    }
    document.writeln("<br/>");
}

document.writeln("<hr />");

// 11 12 13 14 15
// 16 17 18 19
// 20 21 22
// 23 24
// 25
let b = 10;
for (i=1; i<=5; i++) {
    for (j=5; j>=i; j--) {
        document.writeln(b = b + 1);
    }
    document.writeln("<br/>");
}

document.writeln("<hr />");

// 11 12 13 14 15
// 7 8 9 10
// 4 5 6
// 2 3
// 1
