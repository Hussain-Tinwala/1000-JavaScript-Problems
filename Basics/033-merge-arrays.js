const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const result = mergeAndRemoveDuplicates(array1, array2);
console.log("Merged Array without Duplicates:", result);

function mergeAndRemoveDuplicates(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    return [...new Set(mergedArray)];
}

