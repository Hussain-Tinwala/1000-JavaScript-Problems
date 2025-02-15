function factorialIterative(num) {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

const num = Number(prompt("Enter a number: "));
console.log("Factorial: "+factorialIterative(num))
