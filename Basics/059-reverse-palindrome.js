function reverseNumber(num)
{
    let rev=0, org=num;
    while(num!=0)
    {
        rev=rev*10+num%10;
        num=Math.floor(num/10);
    }
    return rev===org
}
let num=prompt("Enter num:")
num=Number.parseInt(num);
if(reverseNumber(num))
{
    console.log("It's a pallindrome")

} else{
    console.log("It's not a pallindrome")
}
