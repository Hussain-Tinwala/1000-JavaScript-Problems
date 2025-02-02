function sumofNnaturalNumbers(n)
{
    if(n<=0) return 0;
    return n+sumofNnaturalNumbers(n-1);
}

let num=prompt("Enter number: ");
num=Number.parseInt(num)
console.log("Sum: "+sumofNnaturalNumbers(num))