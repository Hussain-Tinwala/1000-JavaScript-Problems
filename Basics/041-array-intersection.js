function intersection(arr1, arr2)
{
    return arr1.filter(num=>arr2.includes(num));
}

const arr1= prompt("Enter number seperated by commas: ").split(",").map(Number);
const arr2= prompt("Enter number seperated by commas: ").split(",").map(Number);

console.log("Intersection: "+intersection(arr1,arr2))