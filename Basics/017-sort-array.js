let input = prompt("Enter numbers seperated by commas: ");

if (!input.trim()) {
    console.log("Empty Input")
} else {
    let arr = input.split(",").map(Number);
    
    if (arr.some(isNaN)) {
        console.log("Invalid Input")
    } else {
        arr=arr.sort((a,b)=>a-b)
        console.log(arr)
    }
} 