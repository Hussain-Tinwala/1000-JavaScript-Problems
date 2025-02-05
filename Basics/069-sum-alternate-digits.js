function sumAlternateDigits(num)
{
    return num.toString().split("").map(Number).filter((_,index)=>index%2===0).reduce((sum,digit)=>sum+digit,0)
}

let num=prompt("Enter num:")
num=Number.parseInt(num)
console.log("Sum of alternate digits: "+sumAlternateDigits(num))