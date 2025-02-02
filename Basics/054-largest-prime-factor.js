function largestPrimeFactor(num)
{
    let factor=2;
    while(num>1)
    {
        if(num%factor===0)
        {
            num/=factor;
        } else{
            factor++;
        }
    }
    return factor;
}
let num=prompt("Enter num:")
num=Number.parseInt(num)
console.log("Largest Prime Factor: "+largestPrimeFactor(num))