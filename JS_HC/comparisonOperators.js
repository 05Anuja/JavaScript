/* Comparison Operators-
1) == (only value is checked)
2) === (value as well as datatype)
3) < or <= (less than or less than equal to)
4) > or >= (greater than or greater than equal to)
5) != (not equal- only value is checked)
6) !== (not equal- value as well as datatype)
*/

console.log(null < 0);
console.log(null == 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);
// The reason is that an equality check (==) and comparisons operator(<,>,<=,>=) works differently.
// comparisons convert null to a number, treating it as 0. 
// That's why null >= 0 and null <= 0 givers true

// console.log("2" > 1);

console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined >= 0);