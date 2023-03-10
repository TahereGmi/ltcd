// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    const xStr = x.toString()
    const xArr = xStr.split("")
    const reversedArr = xArr.reverse()
    const reversedStr = reversedArr.join("")
    return xStr === reversedStr
};

// whithout transform to string
function isPalindrome(x) {
    if(x < 0) {
        return false;
    } else if(x < 10) {
        return true;
    } else {
        let reverse = 0;
        let original = x;
        while (x > 0) {
            reverse = reverse * 10 + x % 10;
            x = Math.floor(x / 10)
        }
        return reverse === original
    }
}