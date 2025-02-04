function isPrime(num)
{
    for(let i=2; i<=Math.sqrt(num); i++)
    {
        if(num%i===0)
        {
            return false
        }
    }
    return true;
}

function sumOfPrimes(start, end)
{
    let sum=0;
    for(let i=start; i<=end; i++)
    {
        if(isPrime(i))
        {
            sum+=i;
        }
    }
    return sum;
}

let start= prompt("Enter start num:")
let end= prompt("Enter end num:")
start=Number.parseInt(start)
end=Number.parseInt(end)
console.log("Sum: ",sumOfPrimes(start,end))