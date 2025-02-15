function differencePrimeNonPrimeDigits(num) {
    const primeDigits = [2, 3, 5, 7];
    
    let sumPrime = 0, sumNonPrime = 0;
    num.toString().split("").map(Number).forEach(d => {
        if (primeDigits.includes(d)) sumPrime += d;
        else sumNonPrime += d;
    });

    return sumPrime - sumNonPrime;
}

const num = Number(prompt("Enter a number: "));
console.log("Difference: "+differencePrimeNonPrimeDigits(num))
