function productEvenDigits(num)
{
    let product=1
    let foundEven=false
    while(num!=0)
    {
        let digit=num%10
        if(digit%2===0)
        {
            product=product*digit
            foundEven=true
        }
        num=Math.floor(num/10)
        
    }
    return foundEven?product:0;
}

let num= prompt("Enter num:")
num=Number.parseInt(num)
console.log("Product of Even digits: "+productEvenDigits(num))