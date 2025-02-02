function maxDifference(arr)
{
    const min=Math.min(...arr)
    const max=Math.max(...arr)
    return max-min;
}

const arr = prompt("Enter numbers separated by commas:").split(",").map(Number);
console.log("Maximum Difference:", maxDifference(arr));