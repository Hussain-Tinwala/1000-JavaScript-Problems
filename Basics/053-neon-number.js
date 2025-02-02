function isNeon(num)
{
    const sumOfDigits=(num**2).toString().split("").reduce((sum,digit)=>sum+Number(digit),0)
    return sumOfDigits===num;
}
let num=prompt("Enter num: ")
num=Number.parseInt(num)
if(isNeon(num))
{
    console.log("It's a Neon Number")
} else{
    console.log("It's not a Neon Number")

}