let arr = [1,2,3,4,5];

let newArr = arr.map(function (n) {
    let res = 1;
    for (let i=1;i<=n;i++) {
        res *= i;
    }
    return res;
});
console.log(newArr);