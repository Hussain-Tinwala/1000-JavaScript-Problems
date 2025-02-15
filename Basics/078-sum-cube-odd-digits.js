function sumCubeOddDigits(num) {
    return num.toString().split("").map(Number).filter(d => d % 2 !== 0).reduce((sum, d) => sum + Math.pow(d, 3), 0);
}

const num = Number(prompt("Enter a number: "));
console.log("Sum of cubes: "+sumCubeOddDigits(num))
