function sumEvenPositionDigits(num) {
    const digits = num.toString().split("").map(Number);
    return digits.reduce((sum, digit, index) => (index % 2 === 0 ? sum + digit : sum), 0);
}

let num = Number(prompt("Enter a number: "));
console.log("Sum of digits at even positions: "+sumEvenPositionDigits(num))
