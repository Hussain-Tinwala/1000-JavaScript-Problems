function longestPalindrome(s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.substring(i, j + 1);
            if (substring === substring.split("").reverse().join("") && substring.length > longest.length) {
                longest = substring;
            }
        }
    }

    return longest;
}

console.log(longestPalindrome("babad")); 
