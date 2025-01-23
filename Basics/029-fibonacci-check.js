let num = prompt("Enter a number: ");
num = Number.parseInt(num);

if (isNaN(num) || num <= 0) {
    console.log("Invalid input");
} else {
    if (isFibonacci(num)) {
        console.log(num + " is a Fibonacci number");
    } else {
        console.log(num + " is not a Fibonacci number");
    }
}

function isFibonacci(n) {
    return isPerfectSquare(5*n*n + 4) || isPerfectSquare(5*n*n - 4);
}

function isPerfectSquare(x) {
    let s = Math.sqrt(x);
    return s === Math.floor(s);
}
