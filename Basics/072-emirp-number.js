function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isEmirp(num) {
    const reversedNum = Number(num.toString().split("").reverse().join(""));
    return isPrime(num) && isPrime(reversedNum) && num !== reversedNum;
}

const num = Number(prompt("Enter a number: "));
if(isEmirp(num))
{
    console.log("It's an Emirp Number")
} else{
    console.log("It's not an Emirp Number")
}
