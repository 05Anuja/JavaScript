
function isPalindrome(str) {
    let strng = str.toString();
    let reversed = strng.split("").reverse().join("");
    return reversed === strng;
}

console.log(isPalindrome("wow"));