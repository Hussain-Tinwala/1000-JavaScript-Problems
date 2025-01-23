let input= prompt("Enter numbers seperated by commas: ")
let arr= input.split(",").map(Number);

if(arr.some(isNaN))
{
    console.log("Invalid Input")
} else{
    let newArr= [...new Set(arr)];
    console.log("Array without Duplicates: "+newArr);
}