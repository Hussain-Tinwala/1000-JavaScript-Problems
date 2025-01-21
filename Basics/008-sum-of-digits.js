let num = prompt("Enter num: ");
num = Number.parseInt(num)

if (isNaN(num) || num < 0) {
    console.log("Invalid Input")
} else {
    let rem = 0, sum = 0;
    let org = num;
    while (num > 0) {
        rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    console.log("Sum of digits of " + org + ": " + sum);
}