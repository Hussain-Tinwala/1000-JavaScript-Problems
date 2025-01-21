let input = prompt("Enter numbers seperated by commas: ");
let arr = input.split(",").map(Number);
let sum = 0;

if (arr.some(isNaN)) {
    console.log("Invalid Input")
} else {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum of the numbers: " + sum);
}

