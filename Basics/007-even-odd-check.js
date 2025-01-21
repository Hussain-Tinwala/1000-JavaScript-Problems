let num = prompt("Enter num: ");
num = Number.parseInt(num);

if (isNaN(num) || num < 0) {
    console.log("Invalid Input")
} else {
    if (num % 2 == 0) {
        console.log(num + " is Even")
    } else {
        console.log(num + " is Odd")
    }
}