let input = prompt("Enter numbers seperated by commas: ");

if (!input.trim()) {
    console.log("Empty Input")
} else {
    let arr = input.split(",").map(Number);
    if (arr.some(isNaN)) {
        console.log("Invalid Input")
    } else {
        // for (let i = 0; i < arr.length; i++) {
        //     if (arr[i] > max) {
        //         max = arr[i];
        //     }
        // }
        let max = Math.max(...arr);
        console.log("Maximum: " + max);
    }
}