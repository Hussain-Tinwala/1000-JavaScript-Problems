function sumOddPositionDigits(num)
{
    const digits= num.toString().split("").map(Number)
    return digits.reduce((sum,digit,index)=>(index%2!==0? sum+digit: sum), 0);
}
const num=Number(prompt("Enter num:"))
console.log("Sum of digits at Odd position: "+sumOddPositionDigits(num))