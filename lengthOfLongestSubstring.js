// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    const charSet = new set()
    let start = 0
    let end = 0
    let len = s.length
    let maxLength = 0

    while(end < len) { 
        if(charSet.has(s[end])){
            charSet.delete(s[start])
            start++
        } else {
            charSet.add(s[end])
            end++
            maxLength = Math.max(maxLength, charSet.size)
        }
    }
}

// acbabcbb