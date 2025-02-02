function productOfDigits(num)
{
    return num.toString().split("").reduce((product, digit)=>product*digit);
}

let num=prompt("Enter num: ")
num=Number.parseInt(num)
console.log("Product of digits: "+productOfDigits(num))