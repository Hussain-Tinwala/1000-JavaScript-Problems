function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function isStrongNumber(num) {
    const sum = num.toString().split("").reduce((sum, digit) => sum + factorial(Number(digit)), 0);
    return sum === num;
}

const num = Number(prompt("Enter a number: "));
if(isStrongNumber(num))
{
    console.log("It's a strong number")
} else{
    console.log("It's not a strong number")
}