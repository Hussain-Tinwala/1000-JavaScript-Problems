function countFactors(num)
{
    let count=0;
    for(let i=1; i<=num; i++)
    {
        if(num%i==0) count++;
    }
    return count;
}

let num=prompt("Enter num: ")
num=Number.parseInt(num)
console.log("Number of Factors: "+countFactors(num))