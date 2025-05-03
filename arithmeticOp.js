let n1 = parseInt(prompt("Enter the 1st number"));
let op = prompt("Enter the operator (+,-,*,/)");
let n2 = parseInt(prompt("Enter the 2nd number"));

let operators = ["+", "-", "*", "/"];

let x;

for (let i = 0; i < operators.length; i++) {
  if (operators[i].includes(op)) {
    x = operators[i];
  }
}

switch (x) {
  case "+":
    document.writeln(`Addition of ${n1} and ${n2} is ${n1 + n2}`);
    break;
  case "-":
    document.writeln(`Subtraction of ${n1} and ${n2} is ${n1 - n2}`);
    break;
  case "*":
    document.writeln(`Multiplication of ${n1} and ${n2} is ${n1 * n2}`);
    break;
  case "/":
    document.writeln(`Division of ${n1} and ${n2} is ${n1 / n2}`);
    break;
  default:
    document.writeln(`Invalid Operator`);
}
