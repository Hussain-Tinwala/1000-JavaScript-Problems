let num1=prompt("Enter num1: ")
num1=Number.parseInt(num1)
let num2=prompt("Enter num2: ")
num2=Number.parseInt(num2)

function gcd(a,b)
{
    return b===0?a:gcd(b,a%b)
}
console.log("GCD: ",gcd(num1,num2))