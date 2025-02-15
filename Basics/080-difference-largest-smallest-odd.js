function differenceLargestSmallestOdd(num) {
    const oddDigits = num.toString().split("").map(Number).filter(d => d % 2 !== 0);
    return oddDigits.length > 0 ? Math.max(...oddDigits) - Math.min(...oddDigits) : -1;
}

const num = Number(prompt("Enter a number: "));
console.log("Difference: "+differenceLargestSmallestOdd(num))