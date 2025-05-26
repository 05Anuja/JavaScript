let num1 = 0,
  num2 = 1,
  num3;
console.log(num1);
console.log(num2);

for (let i = 0; i <= 10; i++) {
  num3 = num1 + num2;
  console.log(num3);
  num1 = num2;
  num2 = num3;
}

/*
1st iteration-
num1 = 0 num2 = 0 & num3 = num1 + num2 = 0 + 1 = 1;
2nd iteration-
num1 = 1 num2 = 1 & num3 = num1 + num2 = 1 + 1 = 2;
3rd iteration-
num1 = 1 num2 = 2 & num3 = num1 + num2 = 1 + 2 = 3;
th iteration-
num1 = 2 num2 = 3 & num3 = num1 + num2 = 2 + 3 = 5;
*/
