function factorial(n)
{
    return n===0? 1 : n*factorial(n-1)
}

function sumFactorialOddDigits(num)
{
    return num.toString().split("").map(Number).filter(d=>d%2!==0).reduce((sum,d)=>sum+factorial(d),0)
}

let num=prompt("Enter num:")
console.log("Sum of Factorial of odd digits in",num,":",sumFactorialOddDigits(num))