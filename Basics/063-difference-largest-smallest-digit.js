function differnceLargestSmallestDigit(num)
{
    const digits=num.toString().split("").map(Number)
    return Math.max(...digits)-Math.min(...digits)
}

let num=prompt("Enter num:")
num=Number.parseInt(num)
console.log("Difference (Max-Min): "+differnceLargestSmallestDigit(num))