function isTrimorphic(num)
{
    return (num**3).toString().endsWith(num.toString())
}

let num=prompt("Enter num:")
num=Number.parseInt(num)
if(isTrimorphic(num))
{
    console.log("It's a Trimorphic Number")
} else{
    console.log("It's not a Trimorphic Number")
}