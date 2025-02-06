function productUniqueDigits(num)
{
    const uniqueDigits=[...new Set(num.toString().split("").map(Number))]
    return uniqueDigits.reduce((product,digit)=>product*digit,1)
}
let num=prompt("Enter num:")
num=Number.parseInt(num)
console.log("Product of Unique Digits: "+productUniqueDigits(num))