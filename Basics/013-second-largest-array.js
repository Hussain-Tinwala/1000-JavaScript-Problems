let input = prompt("Enter numbers seperated by comma: ")

if (!input.trim()) {
    console.log("Empty Input")
} else {
    let arr = input.split(",").map(Number);
    if (arr.some(isNaN)) {
        console.log("Invalid Input")
    } else {
        arr.sort((a, b) => b - a);
        let max = arr[0];
        let secondmax = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < max) {
                secondmax = arr[i]
                break;
            }
        }
        console.log(arr)
        console.log("Second Largest Number in array: " + secondmax)
    }
}