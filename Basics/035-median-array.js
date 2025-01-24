const inputArray = [3, 1, 4, 1, 5, 9];
const median = findMedian(inputArray);
console.log("Median:", median);

function findMedian(arr) {
    if (arr.length === 0) return "Array is empty";
    
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);

    return arr.length % 2 === 0 
        ? (arr[mid - 1] + arr[mid]) / 2 
        : arr[mid];
}
