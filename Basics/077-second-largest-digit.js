function secondLargestDigit(num) {
    const uniqueDigits = [...new Set(num.toString().split("").map(Number))].sort((a, b) => b - a);
    return uniqueDigits.length > 1 ? uniqueDigits[1] : -1;
}

const num = Number(prompt("Enter num: "));
console.log("Second largest Digit: "+secondLargestDigit(num))
