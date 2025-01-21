let num = prompt("Enter num: ");

if (isNaN(num)) {
    console.log("Invalid Input");
} else {
    num = Number.parseInt(num);
    if (num < 0) {
        console.log("Please enter positive number");
    }
    else {

        let fact = factorial(num);
        console.log("Factorial of " + num + ": " + fact);
    }

}

function factorial(num) {

    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}