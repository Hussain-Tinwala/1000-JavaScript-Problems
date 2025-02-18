function isSubsequence(small, large) {
    let i = 0, j = 0;
    while (i < small.length && j < large.length) {
        if (small[i] === large[j]) i++;
        j++;
    }
    return i === small.length;
}

const small = prompt("Enter the smaller string: ");
const large = prompt("Enter the larger string: ");
console.log(`${small} is ${isSubsequence(small, large) ? "" : "not"} a subsequence of ${large}`);
