function differenceSumSquare(n) {
    let sum = (n * (n + 1)) / 2;
    let sumSquare = (n * (n + 1) * (2 * n + 1)) / 6;
    return Math.pow(sum, 2) - sumSquare;
}

const n = Number(prompt("Enter N: "));
console.log("Difference: "+differenceSumSquare(n))
