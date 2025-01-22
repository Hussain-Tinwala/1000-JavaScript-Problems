let input = prompt("Enter numbers seperated by comma: ")

if (!input.trim()) {
    console.log("Empty Input")
} else {
    let arr = input.split(",").map(Number);
    if (arr.some(isNaN)) {
        console.log("Invalid Input")
    } else {
        let sum=0, avg=0
        for (let i = 0; i < arr.length; i++) {
            sum+=arr[i]
        }
        avg=sum/arr.length
        console.log("Average: " + avg)
    }
}