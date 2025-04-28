let arr = [1, 2, 3, 4, 5];

let newArr = arr.map(function (n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
});
console.log(newArr);

function fact_num(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * fact_num(num - 1);
}
// console.log(fact_num(6));
console.log(fact_num(5));
