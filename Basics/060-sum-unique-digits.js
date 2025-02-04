function sumUniqueDigits(num)
{
    const digits= num.toString().split("").map(Number)
    const uniqueDigits=[...new Set(digits)]
    return uniqueDigits.reduce((sum, digit)=>sum+digit, 0)
}

let num=prompt("Enter num:")
num=Number.parseInt(num)
console.log("Sum of unique digits: "+sumUniqueDigits(num))