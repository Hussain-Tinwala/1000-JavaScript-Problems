function isPrime(num)
{
    if(num<2) return false;
    for(let i=2; i<=Math.sqrt(num); i++)
    {
        if(num%i===0) return false;
    }
    return true;
}

function isPallindrome(num)
{
    return num.toString()===num.toString().split("").reverse().join("");
}

function isPalprime(num)
{
    return isPrime(num) && isPallindrome(num)
}

let num=prompt("Enter num:")
num=Number.parseInt(num)
if(isPalprime(num))
{
    console.log("It's a Palprime number")
} else{
    console.log("It's not a Palprime number")
    
}