let arr = [10,20,5,15,19];
let highestNum = arr[0];
let secondHighest = 0;

for (num of arr) {
    if (num > highestNum) {
        secondHighest = highestNum;
        highestNum = num;
    } else if (num > secondHighest && num < highestNum) {
        secondHighest = num;
    }
}

console.log(secondHighest);

