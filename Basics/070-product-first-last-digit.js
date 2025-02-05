function productFirstLastDigit(num)
{
    const digits=num.toString().split("").map(Number)
    return digits[0]*digits[digits.length-1]
}

let num=prompt("Enter num:")
num=Number.parseInt(num)
console.log("Product of first and last digit:",productFirstLastDigit(num))