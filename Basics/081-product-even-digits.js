function productEvenDigits(num) {
    return num.toString().split("").map(Number).filter(d => d % 2 === 0).reduce((product, d) => product * d, 1);
}

const num = Number(prompt("Enter num: "));
console.log("Product of even digits: "+productEvenDigits(num))
