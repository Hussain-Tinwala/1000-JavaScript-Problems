function arrayUnion(arr1, arr2)
{
    return[...new Set([...arr1,...arr2])];
}

let arr1=prompt("Enter elements for arr1 seperated by commas: ").split(",").map(Number);
let arr2=prompt("Enter elements for arr2 seperated by commas: ").split(",").map(Number);
console.log("Union of "+arr1+" and "+arr2+": "+arrayUnion(arr1,arr2));

