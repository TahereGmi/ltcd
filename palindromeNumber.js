// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    const xStr = x.toString()
    const xArr = xStr.split("")
    const reversedArr = xArr.reverse()
    const reversedStr = reversedArr.join("")
    return xStr === reversedStr
};