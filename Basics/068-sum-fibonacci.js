function sumFibonacci(n)
{
    let a=0, b=1, sum=0
    for(let i=0; i<n; i++)
    {
        sum+=a;
        [a,b]=[b, a+b];
    }
    return sum;
}

let num=prompt("Enter num:")
num=Number.parseInt(num)
console.log("Sum of first",num,"Fibonacci numbers: ",sumFibonacci(num))