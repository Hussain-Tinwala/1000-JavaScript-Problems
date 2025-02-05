function countEvenOddDigits(num)
{
    const digits=num.toString().split("").map(Number)
    let evenCount=0, oddCount=0

    digits.forEach(digit=>digit%2===0? evenCount++: oddCount++)
    return {evenCount, oddCount}
}

let num=prompt("Enter num:")
const {evenCount, oddCount}= countEvenOddDigits(num)
console.log("Even Digits: "+evenCount+" Odd Digits: "+oddCount)