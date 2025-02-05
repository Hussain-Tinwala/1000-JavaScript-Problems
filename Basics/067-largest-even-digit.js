function largestEvenDigit(num)
{
    return Math.max(...num.toString().split("").map(Number).filter(d=>d%2===0),-1)
}

let num=prompt("Enter num:")
num=Number.parseInt(num)
console.log("Largest Even Digit: "+largestEvenDigit(num))