function factorial(n)
{
    return n===0? 1: n*factorial(n-1);
}

function sumFactorialDigits(num)
{
    return num.toString().split("").reduce((sum,digit)=>sum+factorial(Number(digit)),0)
}

let num=prompt("Enter num: ")
num=Number.parseInt(num)
console.log("Sum of factorial of digits of",num,": ",sumFactorialDigits(num))